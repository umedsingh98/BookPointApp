import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cards from "./Cards";

function Explore() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(
          "https://bookappbackend-99zi.onrender.com/book/bookportal"
        );
        console.log(res.data);
        setBook(res.data.filter((data) => data.category === "paid"));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-16 py-16 items-center justify-center text-center">
          <h1 className="text-2xl font-bold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-yellow-500">Here! :</span>
          </h1>
          <p className="mt-12 mx-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/">
            <button className="mt-8 bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-500 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Explore Your Favourite Books</h1>
          <hr className="mt-3"></hr>
        </div>
      <div>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center flex-col gap-2 min-h-[200px]">
            <div className="w-12 h-12 border-4 border-t-4 border-grey-200 border-t-blue-500 rounded-full animate-spin"></div>
            <h2 className="text-xl">Loading Data...</h2>
          </div>
        ) : (
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {book.map((item) => (
              <Cards items={item} key={item.id} />
            ))}
          </div>
        )}
        </div>
      </div>
    </>
  );
}

export default Explore;
