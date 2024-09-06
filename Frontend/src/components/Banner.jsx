import React from "react";
import banner from "../assets/books.png" 
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex md:flex-row flex-col">
        <div className=" w-full md:w-1/2 mt-28 md:mt-28">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Start learning today with BookPoint.{" "}
              <span className="text-yellow-500">New Books Every Week.</span>
            </h1>
            <p className="text-xl pr-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500.
            </p>
            
          <label className="input input-bordered dark:border-slate-400 flex items-center gap-2 mt-6 dark:bg-slate-900 dark:text-white">
            Email :
            <input type="text" className="grow  p-2 dark:bg-slate-900 dark:text-white" placeholder=" Enter your email here..." />
          </label>
          </div>
         <button className="btn mt-3 px-6 bg-red-700 text-white gap-2 hover:bg-green-600">Signup</button>
        </div>
        <div className="md:mt-16 md:w-1/2">
         <img src={banner} alt="books"/>
        </div>
      </div>
    </>
  );
}

export default Banner;
