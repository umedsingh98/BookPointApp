import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import axios from "axios";
import { toast } from "react-hot-toast";
function Login() {
//Taken from React Hook Form 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  //login integration with backend
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password
    };
    await axios.post("https://bookappbackend-99zi.onrender.com/user/login", userInfo)
    .then((res) => {
      console.log(res.data)
      if(res.data){
        toast.success('LoggedIn Successfully!');
        setTimeout(() => {
          
          window.location.href = "/explore";
          localStorage.setItem("Users",JSON.stringify(res.data.user))                
        },2000);
      }

    }).catch((err) => {
      if(err.response){
        console.log(err)
        toast.error("Error: "+ err.response.data.message);
        
      }
    });
  };

  return (
    <>
    <Navbar />
        <div class="h-screen dark:bg-gray-900">
          <div class="h-screen shadow-md flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="shadow-lg rounded bg-white md:mt-0 w-full mt-8 md:max-w-md xl:p-0 ">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8 dark:bg-slate-900">
                <div className="flex justify-between">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Log In
                </h1>
                <a href="/" className=" p-2 font-medium text-slate-600 bg-transparent rounded-md">Back</a>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} class="dialog space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your email..."
                      {...register("email", { required: true })}
                    />
                    {errors.email && <span className="text-sm text-red-500">This field is required.</span>}
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register("password", { required: true })}
                    />
                    {errors.password && <span className="text-sm text-red-500">This field is required.</span>}
                  </div>
                  <div className="flex justify-center">
                  <button
                    type="submit"
                    class="btn w-2/3 btn-base btn-primary mt-3"
                  >
                    Log In
                  </button>
                  </div>
                  <p class="text-center text-sm  font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <a
                      href="/signup"
                      class="font-medium text-blue-400 hover:underline dark:text-primary-500"                        
                    >
                       Sign up
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Login;
