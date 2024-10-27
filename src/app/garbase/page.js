import React from 'react';
import { FaCalendarAlt, FaEye, FaPlay, FaRegCalendarCheck } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineOndemandVideo, MdOutlineSlowMotionVideo, MdOutlineWatchLater } from 'react-icons/md';

const Garbase = () => {
  return (
    <div>
      <div>
        <div
          className="-z-10"
          style={{
            backgroundImage: "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.webp?b=1&s=612x612&w=0&k=20&c=8xbZvMyptEaqMW46diKakhVgkPkAzBi5l7J1yveCZFk=",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></div>



        <div className="grid grid-cols-1 md:grid-cols-2 pt-6 lg:grid-cols-5 gap-5 container mx-auto px-2 md:px-6 lg:px-12">
          <div className="col-span-1 lg:col-span-3">
            <h1 className="text-3xl lg:text-5xl font-bold text-[#151515]">
              WordPress Theme Development
            </h1>
            <p className="text-[#727272] text-sm lg:text-base my-4 lg:my-8">
              বিশ্বের সবচেয়ে জনপ্রিয় কন্টেন্ট ম্যানেজমেন্ট সিস্টেম ওয়ার্ডপ্রেস থিম
              ডেভেলপমেন্ট শিখে মার্কেটপ্লেস থেকে ইনকাম শুরু করুন আপনিও! কোর্সটি
              করার জন্য পূর্ব কোডিং নলেজ না থাকলেও কোন সমস্যা নেই; কোর্সটিকে
              সাজানো হয়েছে একদম বিগিনার ফ্রেন্ডলি ওয়েতে, জয়েন করতে পারবেন ০.০
              বিগিনাররাও।
            </p>
          </div>

          <div className="col-span-1 lg:col-span-2 border">
            <button className="bg-[#ffcd33] w-full flex md:hidden text-sm items-center gap-3 mb-4 justify-center font-semibold p-3 rounded-lg">
              ব্যাচে ভর্তি হোন <IoIosArrowForward />
            </button>
            <div className="relative z-0">
              <video
                title="কোর্সের ইন্ট্রা ভিডিও"
                src={wordpressVideo}
                controls
                width="100%"
                loop
              ></video>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 container mx-auto  px-2 md:px-6 lg:px-12  pb-6">
          <div className="col-span-1 order-2 md:order-1 lg:col-span-3">
            <div className="col-span-1 lg:col-span-3">
              <div className="flex font-medium justify-between text-sm gap-3 bg-white rounded p-4 border-l-2 border-orange-500">
                <p className="bg-orange-500 btn btn-sm px-2 py-1 text-white rounded">
                  ব্যাচ-৪
                </p>

                <p className="flex gap-1 border-x-2 px-3 lg:px-5">
                  <FaCalendarAlt className="text-orange-500" />
                  শুরু হবে
                  <br /> বৃহস্পতিবার, 31 অক্টোবর
                </p>

                <p className="flex gap-1">
                  <FaRegCalendarCheck className="text-orange-500" /> ক্লাস শিডিউল <br />{" "}
                  বৃহ, সোম, (রাত 9:00 - 10:00)
                </p>
              </div>

              <div className="bg-white">
                <div className="flex font-medium justify-between text-sm gap-3 my-8 bg-white rounded p-4 border-l-2 border-green-500">
                  <p className="flex items-center gap-2 lg:gap-5 text-base lg:text-xl font-semibold">
                    <MdOutlineOndemandVideo className="text-green-400 text-2xl lg:text-5xl" />{" "}
                    ফ্রি ডেমো ক্লাস
                  </p>
                  <p className="btn">
                    <MdOutlineSlowMotionVideo className="text-2xl" /> ভিডিও দেখুন
                  </p>
                </div>
              </div>

              <div className="">
          
                <div
                  className="tabs bg-[#060633] text-white justify-around text-xs lg:text-sm font-semibold mt-10 mb-12 overflow-x-scroll flex gap-4"
                  style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                    padding: "1rem",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <button
                    className={`${activeBtn === 1
                        ? "bg-white text-blue-950"
                        : "bg-blue-950 text-white"
                      } px-2 lg:px-3 py-1 lg:py-2 rounded border-b-2`}
                    onClick={() => handleScroll(section1Ref, 1)}
                  >
                    স্ট্যাডিপ্ল্যান
                  </button>
                  <button
                    className={`${activeBtn === 2
                        ? "bg-white text-blue-950"
                        : "bg-blue-950 text-white"
                      } px-2 lg:px-3 py-1 lg:py-2 rounded border-b-2`}
                    onClick={() => handleScroll(section2Ref, 2)}
                  >
                    ইন্সট্রাক্টর
                  </button>
                  <button
                    className={`${activeBtn === 3
                        ? "bg-white text-blue-950"
                        : "bg-blue-950 text-white"
                      } px-2 lg:px-3 py-1 lg:py-2 rounded border-b-2`}
                    onClick={() => handleScroll(section3Ref, 3)}
                  >
                    কোর্সসম্পর্কে
                  </button>
                  <button
                    className={`${activeBtn === 4
                        ? "bg-white text-blue-950"
                        : "bg-blue-950 text-white"
                      } px-2 lg:px-3 py-1 lg:py-2 rounded border-b-2`}
                    onClick={() => handleScroll(section4Ref, 4)}
                  >
                    প্রজেক্টস
                  </button>
                  <button
                    className={`${activeBtn === 5
                        ? "bg-white text-blue-950"
                        : "bg-blue-950 text-white"
                      } px-2 lg:px-3 py-1 lg:py-2 rounded border-b-2`}
                    onClick={() => handleScroll(section5Ref, 5)}
                  >
                    রিভিউ
                  </button>
                  <button
                    className={`${activeBtn === 6
                        ? "bg-white text-blue-950"
                        : "bg-blue-950 text-white"
                      } px-2 lg:px-3 py-1 lg:py-2 rounded border-b-2`}
                    onClick={() => handleScroll(section6Ref, 6)}
                  >
                    হেল্প
                  </button>
                </div>
                {/* extra section out of btn*/}

                <div
                  className="flex flex-col lg:flex-row gap-5 bg-black/75 bg-blend-multiply p-3"
                  style={{
                    backgroundImage: "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.webp?b=1&s=612x612&w=0&k=20&c=8xbZvMyptEaqMW46diKakhVgkPkAzBi5l7J1yveCZFk=",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="flex-1 text-white flex flex-col  px-2 justify-center">
                    <h1 className="text-2xl">
                      Kick-Start your career on{" "}
                      <span className="uppercase font-bold">Free</span> MASTERCLASS
                    </h1>
                    <div>
                      <button className="bg-gray-100 text-black mt-8 mb-3 btn btn-sm">
                        ক্লাস টপিক
                      </button>
                    </div>
                    <h2 className="text-3xl font-bold">
                      থিম ডেভেলপমেন্টে কীভাবে Child Theme কাজ করে??
                    </h2>
                  </div>
                  <div className="card bg-base-100 w-full max-w-sm shrink-0 flex-1 shadow-2xl">
                    <div className="card-body p-4 font-semibold text-[#757575]">
                      <h1 className="text-2xl font-bold text-[#151515] text-center">
                        নতুন কিছু শিখতে আসুন মাস্টারক্লাসে
                      </h1>
                      <span className="flex my-2 justify-evenly">
                        <p className="flex items-center gap-2">
                          <FaCalendarAlt /> 26 অক্টোবর
                        </p>
                        <p className="flex items-center gap-2">
                          <MdOutlineWatchLater /> রাত 9 টা
                        </p>
                        <p className="flex items-center gap-2">
                          <IoLocationOutline />
                          ZOOM
                        </p>
                      </span>

                      <form>
                        <div className="form-control">
                          <label className="label">
                            <span className="font-semibold">ফোন নাম্বার দিন</span>
                          </label>
                          <input
                            type="number"
                            placeholder="ফোন নাম্বার"
                            className="input py-8 input-bordered"
                            required
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="font-semibold">ই-মেইল দিন</span>
                          </label>
                          <input
                            type="email"
                            placeholder="ই-মেইল"
                            className="input py-8 input-bordered"
                            required
                          />
                        </div>
                        <div className="form-control mt-6">
                          <button className="btn btn-warning">
                            মাস্টার-ক্লাস বুক করুন
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>


                <div ref={section1Ref}>
                  <div className="mt-8">
                    <div className="flex gap-8 items-center mb-2">
                      <h1 className="text-3xl font-bold text-[#151515]">স্টাডি প্ল্যান</h1>{" "}
                      <p className="font-semibold text-[#747474]">
                        * {courses.length} টি মডিউল
                      </p>
                    </div>
                    <div className="border rounded p-2 ">
                      {(seeAll ? courses : courses.slice(0, 4)).map((course, index) => (
                        <div
                          key={index}
                          className="collapse mt-4 collapse-arrow bg-white border"
                        >
                          <input
                            defaultChecked={index === 0}
                            type="radio"
                            name="my-accordion-2"
                          />

                          <div className="collapse-title text-lg lg:text-xl flex items-center gap-4 font-medium">
                            <button
                              className={`p-2 lg:p-3 text-white rounded-xl text-sm lg:text-base flex items-center font-medium lg:font-bold flex-col ${course.color}`}
                            >
                              <span>মডিউল</span>
                              {course.id}
                            </button>
                            {course.name}
                          </div>
                          <div className="collapse-content my-2 px-8 text-justify">
                            <h1 className="border-y my-2 py-1">{course.des}</h1>
                            <div>
                              {course.video.map((singleVideo, idx) => (
                                <div key={idx} className="flex flex-col lg:flex-row justify-between border-b py-2">
                                  <p className="flex items-center gap-1">
                                    <FaPlay />
                                    {singleVideo.video1}{" "}
                                  </p>
                                  <span className="flex items-center gap-12 mt-2 lg:mt-0 lg:gap-3">
                                    <p className="ml-3">{singleVideo.time} মিনিট</p>
                                    <button className="btn btn-sm lg:btn-md flex items-center">
                                      <FaEye></FaEye> দেখুন
                                    </button>
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setSeeAll(!seeAll)}
                      className="btn btn-active btn-ghost w-full font-bold mt-8"
                    >
                      {seeAll ? "কমিয়ে দেখুন" : `আরো ${courses.length - 4} টি দেখুন`}
                    </button>

                    <div className="flex flex-col lg:flex-row gap-5 my-20 items-center">
                      <h1 className="text-3xl lg:text-5xl w-full lg:w-1/2 font-bold text-[#151515]">
                        ক্লিক করে দেখে নিন কোর্সের ডেমো ক্লাস
                      </h1>
                      <video className="w-full lg:w-1/2" src={videoplayback} controls></video>
                    </div>
                  </div>
                </div>



                <div ref={section2Ref} className="bg-orange-100 p-5 rounded">
                  <h1 className="flex items-center gap-3 text-xl font-bold text-[#151515]">
                    <img src={medalImg} className="w-8" alt="" /> লিড ইন্সট্রাক্টর
                  </h1>
                  <div className="flex gap-3 my-3 items-center bg-white p-5 rounded-lg">
                    <img className="w-12 lg:w-16" src={face} alt="" />{" "}
                    <span>
                      <h3 className="text-base lg:text-xl font-semibold text-[#151515]">
                        Salim Rana
                      </h3>
                      <h5 className="text-[#747474] text-xs lg:text-base">
                        Founder and Senior Software Engineer at ThemePure
                      </h5>
                    </span>
                  </div>
                  <div className="flex gap-3 items-center bg-white p-5 rounded-lg">
                    <img className="w-12 lg:w-16" src={faceA} alt="" />{" "}
                    <span>
                      <h3 className="text-base lg:text-xl font-semibold text-[#151515]">
                        Abdullah Al Noman Prince
                      </h3>
                      <h5 className="text-[#747474] text-xs lg:text-base">
                        PHP Laravel | Web Application Developer
                      </h5>
                    </span>
                  </div>
                </div>
                <div ref={section3Ref}>
             
                </div>
                <div ref={section4Ref}>
                  <div className="p-5 bg-blue-950 rounded-md">
                    <div className="flex gap-5 items-center mb-5">
                      <h1 className="text-white text-xl font-bold">
                        কোর্স চলাকালী প্রজেক্টস সমূহ
                      </h1>
                      <hr className="w-1/2 border-t hidden md:block border-gray-300 mt-2" />
                    </div>

                    <img className="w-full lg:w-1/2 rounded-xl" src={themes} alt="" />
                  </div>
                  <div className="mt-12">
                    <h1 className="pb-5 text-xl lg:text-3xl font-bold text-[#151515]">
                      রিকোয়ারমেন্ট
                    </h1>
                    <hr className="pb-8" />
                    <div className="pl-5 text-[#323232]">
                      <p>
                        - পূর্ব কোডিং নলেজ জানা না থাকলেও শেখা যাবে ওয়ার্ডপ্রেস থিম
                        ডেভেলপমেন্ট
                      </p>
                      <p>- ল্যাপটপ/ডেস্কটপ (৪ জিবি র‍্যাম)</p>
                      <p>- ভালো ইন্টারনেট কানেকশন</p>
                      <p>- লেগে থাকার মানসিকতা</p>
                    </div>
                  </div>
                </div>
                <div ref={section5Ref}>
        
                </div>
                <div ref={section6Ref}>
                  <div className="mt-16 mb-24">
                    <h1 className="pb-5 text-xl lg:text-3xl font-bold text-[#151515]">
                      প্রয়োজনে
                    </h1>
                    <hr className="pb-8" />
                    <p className="pl-5 text-[#323232]">
                      ব্যাচ সংক্রান্ত যেকোনো তথ্যের জন্যে কল করুন{" "}
                      <span className="font-semibold text-lg mx-2 underline text-[#151515]">
                        +880 1940-444476
                      </span>{" "}
                      (সকাল ১০টা থেকে রাত ১০টা)
                    </p>
                  </div>
                </div>
              </div>
            </div>


          </div>

          <div className="col-span-1 order-1 md:order-2 lg:col-span-2 border">
            <div className="bg-white col-span-1 lg:col-span-2 border"></div>
       
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default Garbase;