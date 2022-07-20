import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Firebase from "../assets/firebase.png";
import AWS from "../assets/aws.png";
import Github from "../assets/github.png";

function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#132a4b] text-gray-300">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full">
        <div className="">
          <div className="sm:text-center pb-6">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
              Experience
            </p>
          </div>
          <div className="lg:text-left text-justify">
            <p className="text-[#8892b0]  max-w-600px">
              // These are the technologies I've worked with..
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div className="shadow-lg shadow-[#13214b] hover:scale-110 duration-150">
            <img className="w-20 mx-auto " src={HTML} alt="html icon" />
            <p>HTML</p>
          </div>
          <div className="shadow-lg shadow-[#13214b] hover:scale-110 duration-150">
            <img className="w-20 mx-auto " src={CSS} alt="html icon" />
            <p>CSS</p>
          </div>
          <div className="shadow-lg shadow-[#13214b] hover:scale-110 duration-150">
            <img className="w-20 mx-auto " src={JavaScript} alt="html icon" />
            <p>JavaScript</p>
          </div>
          <div className="shadow-lg shadow-[#13214b] hover:scale-110 duration-150">
            <img className="w-20 mx-auto " src={ReactImg} alt="html icon" />
            <p>React</p>
          </div>

          <div className="shadow-lg shadow-[#13214b] hover:scale-110 duration-150">
            <img className="w-20 mx-auto " src={Node} alt="html icon" />
            <p>Node JS</p>
          </div>

          <div className="shadow-lg shadow-[#13214b] hover:scale-110 duration-150">
            <img className="w-20 mx-auto " src={Github} alt="html icon" />
            <p>Github</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
