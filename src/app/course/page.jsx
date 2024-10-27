/* eslint-disable @next/next/no-img-element */
const Courses = () => {
  return (
    <div className="m-mt_16px">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className=" bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src="https://itderbd.nextwebservice.com/storage/uploads/course/7674951728743412.jpg"
                alt="" 
              />
             
              <div className="absolute top-0 left-0 p-2">
                <h3 className="text-white text-xl font-bold">Data Entry</h3>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-gray-800 text-lg font-semibold mb-2">
                Course name from Api
              </h2>
              <div className="flex items-center justify-between mb-4">
                <span className="flex text-blue-500 text-md">
                  ★★★★★(no need to change)
                </span>
                <span className="ml-2 text-gray-600 text-md font-bold">
                  Triner name from Api
                </span>
              </div>
            
              <p className="text-gray-600 text-md mb-4">
                Course Details{" "}
                <span className="text-blue-500">
                  Show Details(no need to change)
                </span>
              </p>
              <hr />
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <span className="line-through text-gray-400 text-sm">
                    Tk 800 (regular price from Api)
                  </span>
                  <span className="text-green-600 text-md font-bold ml-2">
                    -70% (calculate from regular-discount price)
                  </span>
                  <span className="text-black text-lg font-bold ml-2">
                    Tk 240( discount price from Api)
                  </span>
                </div>
              
              </div>
              <div className="mt-4 flex gap-2">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-500 w-full font-bold text-md">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div> */}

      <div className="  flex items-center justify-center ">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="">
            <img
              src="https://cdn.ostad.app/course/cover/2024-10-22T12-37-49.289Z-Python-Thumbnail-1.jpg" // Replace with the actual course image
              alt="Course Banner"
              className="w-full h-56 object-cover"
            />

          </div>

          <div className="">
            <div className="flex items-center space-x-4 m-2">
              <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm">
                ব্যাচ ৬
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm">
                ৬ সিট বাকি
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm">
                ৪ দিন বাকি
              </span>
            </div>
            <hr />
            <p className="text-gray-600 mt-2">
            Full Stack Web Development with Python, Django & React
            </p>



            <div className="mt-6">
              <a
                href="#"
                className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg text-center"
              >
                বিস্তারিত দেখুন 
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
