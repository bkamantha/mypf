import React from "react";

function Projects() {
  return (
    <div>
      <div name="skills" className="w-full h-screen bg-[#132a4b] text-gray-300">
        <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full">
          <div className="">
            <div className="sm:text-center pb-6">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
                Projects
              </p>
            </div>
            <div className="lg:text-left text-justify">
              <p className="text-[#8892b0]  max-w-600px">
                // These are the Project I've worked ..
              </p>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-8">
            <div className=" hover:scale-110 duration-150 shadow-lg shadow-[#13214b]  group container rounded-md flex justify-center items-center mx-auto content-div">
              <div className="">
                <span></span>
                <div>
                  <a href="/">
                    <button>Code</button>
                  </a>
                  <a href="/">
                    <button>Demo</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
