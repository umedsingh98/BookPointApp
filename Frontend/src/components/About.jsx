import React from "react";
import Navbar from "./Navbar.jsx"; // Import your Navbar component
import Footer from "./Footer.jsx"; // Import your Footer component
import bannerImage from "../assets/banner.jpg"; // Import your banner image
import teamImage from "../assets/team.jpg"; // Import team image

function AboutUs() {
  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <div className="relative md:mt-0 mt-16">
        <img
          src={bannerImage}
          alt="Bookstore Banner"
          className="w-full h-auto object-contain md:object-cover animate-fadeIn"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-4xl md:text-8xl font-bold text-white animate-fadeInDown">
            About Us
          </h1>
        </div>
      </div>
      {/* About Section */}
      <div className="flex justify-center items-center mt-4 md:mx-5 bg-gray-100 dark:bg-slate-800">
        <div className="w-full md:w-full lg:w-full p-6 dark:bg-slate-900 shadow-md rounded-md animate-fadeInUp">
          <h2 className="text-4xl font-bold mb-6 text-center dark:text-white">
            Welcome to BookPoint
          </h2>
          <p className=" text-lg text-gray-600 dark:text-slate-300 mb-4 animate-fadeInUp">
            Welcome to BookPoint, your number one source for all things books.
            We are dedicated to giving you the very best collection of books,
            with a focus on diversity, affordability, and convenience. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Tempore quod
            suscipit eum.Error dolor iure earum sint quo aliquam fugit
            voluptatibus. Quasi, tempora? Pariatur harum ab sed ipsum veritatis
            nihil.
          </p>

          {/* Mission Section */}
          <h3 className="text-2xl font-semibold dark:text-white mb-4 animate-fadeInLeft">
            Our Mission
          </h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 mb-4 animate-fadeInLeft">
            Our mission is to foster a love for reading in people of all ages by
            providing the latest releases as well as timeless classics. We hope
            you enjoy our collection as much as we enjoy offering it to you.
          </p>

          {/* Team Section */}
          <div className="my-8">
            <h3 className="text-2xl font-semibold dark:text-white mb-4 animate-slideInRight">
              Meet the Team
            </h3>
            <div className="flex flex-col md:flex-row justify-items-center md:space-x-6">
              <img
                src={teamImage}
                alt="Our Team"
                className="w-full md:w-1/2 h-auto rounded-md shadow-md mb-4 md:mb-0 animate-fadeIn"
              />
              <p className="md:px-5 md:mt-4 text-lg text-gray-600 dark:text-slate-300 animate-slideInLeft">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium a dicta rem, rerum corrupti ea fugiat esse ratione
                officia molestias perspiciatis ad, et nostrum. Incidunt voluptas
                eligendi obcaecati nemo quibusdam. Consectetur ipsa reiciendis
                quidem nisi quibusdam recusandae, dolore commodi provident,
                perspiciatis, sequi quasi neque laboriosam quos. Nisi corporis
                doloremque pariatur porro. Mollitia, quam perferendis? Quis ea
                incidunt repellendus debitis. Sunt! Porro incidunt, ipsam
                provident similique quibusdam debitis distinctio magnam ex! Nam
                repellendus neque, nostrum numquam, cupiditate ipsum harum magni
                facilis sunt placeat, exercitationem illo cum repudiandae illum
                obcaecati ex at? Our dedicated team works tirelessly to bring
                you the best selection of books. We believe in the power of
                stories to inspire, educate, and entertain readers of all ages.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                error ipsa, officiis maxime repellat delectus qui eligendi.
                Nostrum, quaerat sint.
              </p>
            </div>
          </div>

          {/* Final Message */}
          <p className="text-lg text-gray-600 dark:text-slate-300 mb-4 animate-fadeIn">
            If you have any questions or comments, please don't hesitate to
            contact us. We are always here to help and ensure you have the best
            reading experience possible.
          </p>

          <p className="text-lg text-gray-600 dark:text-slate-300 animate-fadeIn">
            Sincerely, <br />
            <span className="font-bold">The BookPoint Team</span>
          </p>
        </div>
      </div>
      <Footer /> {/* Include your footer component */}
    </>
  );
}

export default AboutUs;
