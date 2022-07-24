import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#132a4b]">
      {/* Container*/}
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi,my name is</p>
        <h1 className="text-4xl md:text-7xl font-bold text-[#ccd6f6]">
          Bhanuka Kamantha
        </h1>
        <h2 className="text-5xl md:text-8xl font-bold text-[#8892b0]">
          I'm Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-600px">
          Dynamic and creative Python developer with experience in computer
          vision and machine learning, as well as a graphic designer with over a
          year of product development experience at MAS Holdings.
        </p>
        <div>
          <button className="text-white group rounded-lg  border-2 px-3 py-3 my-2 flex items-center hover:bg-pink-700 hover:border-pink-700">
            View Work
            <HiArrowNarrowRight className="origin-center  group-hover:rotate-90 duration-300 ml-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
