import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="h-screen">
      <div class="relative max-w-7xl shadow-md mx-auto mt-20">
        <img
          class="h-64 w-full object-fill rounded-md"
          src="https://static.vecteezy.com/system/resources/previews/008/141/203/non_2x/panoramic-abstract-web-background-colorful-gradient-vector.jpg"
          alt="Random image"
        />
        <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl lg:text-7xl">
            About Us
          </h1>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mt-4">
        <div className="col-5 ">
          <h1 className="text-2xl">Content Here</h1>
        </div>
        <div className="col-5">
          <h1 className="text-2xl">Content Here</h1>
        </div>
      </div>
      </div>
    </>
  );
}

export default About;
