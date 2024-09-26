import React, { useState } from "react";
import banner from "../assets/child.png"; 
import { toast } from "react-hot-toast";
function Banner() {

  const [email, setEmail] = useState("");
  const handleOnChange = (event) => {
    console.log("change value:" + event.target.value);
    setEmail(event.target.value);
  }

  const handleOnClick = (event) => {
    console.log("submit button:" + email);
    setTimeout(() => {
      if (email === "") {
        toast.error("Please Enter Your Email!");
        return;
      }
      toast.success("Email Registered successfully!");
  
    },1000)
  }
  return (
    <>
      <div className="w-full container md:px-20 px-4 flex md:flex-row flex-col animate-fadeIn">
        <div className="w-full md:w-1/2 mt-28 md:mt-32">
          <div className="space-y-8 ml-2">
            <h1 className="md:text-5xl text-4xl font-bold animate-slideIn">
              Start learning today with BookPoint.{" "}
              <span className="text-yellow-500">New books every week.</span>
            </h1>
            <p className="md:text-xl text-lg animate-slideInDelay">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500.
            </p>

            <div className="flex flex-col space-y-2 mt-6 animate-fadeInDelay">
              <label htmlFor="email" className="text-lg">
                Email:
              </label>
              <input
                type="text"
                id="email"
                className="input input-bordered bg-slate-100 dark:border-slate-400 dark:bg-slate-900 dark:text-white pl-3"
                placeholder="Enter your email here..."
                onChange={handleOnChange}
              />
            </div>
          </div>

          <button onClick={handleOnClick} type="submit" className="btn mt-6 px-6 ml-2 bg-red-700 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 ">
            Signup
          </button>
        </div>

        <div className="md:mt-16 w-full md:w-1/3 p-6 md:ml-32">
          <img
            src={banner}
            alt="Books"
            className="w-full h-auto transform transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
