import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#132a4b] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-1 gap-8">
          <div className="sm:text-center pb-6 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
              About
            </p>
          </div>
        </div>

        <div className="max-w-[1000px] w-full  sm:grid grid-cols-2 gap-8 px-4">
          <div className="lg:text-right text-[#8892b0] text-left text-4xl pb-4 font-bold ">
            <p>Hi.I'm bhanuka,nice to meet you please look around.</p>
          </div>
          <div className="lg:text-left text-justify">
            <p className="text-[#8892b0]  max-w-600px">
              Well, I’ve been working on web development for two years now,
              while still studying at college. Had my own projects, coded mostly
              in Python,Now I am looking to get a job with an innovative game
              studio, and am glad to be interviewing with you here. Apart from
              coding, I enjoy reading a good book, or a nice evening out with
              friends. That would do for a short introduction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
