import React from "react";
import banner from "../assets/child.png" 
function Banner() {
  return (
    <>
      <div className="w-full container mx-auto md:px-20 px-4 flex md:flex-row flex-col">
        <div className=" w-full md:w-1/2 mt-28 md:mt-32">
          <div className="space-y-8 ml-2">
            <h1 className="md:text-5xl text-4xl font-bold">
              Start learning today with BookPoint.{" "}
              <span className="text-yellow-500">New books every week.</span>
            </h1>
            <p className="md:text-xl text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500.
            </p>
            
          <label className="input input-bordered bg-slate-100 dark:border-slate-400 dark:bg-slate-900 dark:text-white flex items-center gap-2 mt-6">
            Email:
            <input type="text" className="grow p-2" placeholder=" Enter your email here..." />
          </label>
          </div>
         <button className="btn mt-3 px-6 ml-2 bg-red-700 text-white gap-2 hover:bg-green-600">Signup</button>
        </div>
        <div className="md:mt-16 md:w-1/3 w-full p-6 md:ml-32">
         <img src={banner} alt="books"/>
        </div>
      </div>
    </>
  );
}

export default Banner;
