import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import axios from "axios";
import Cards from './Cards';

function Explore() {
    
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book/bookportal");
        console.log(res.data);
        setBook(res.data.filter((data) => data.category === "paid"));
      } catch (error) {
        console.log(error);
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
        <h1 className='text-2xl font-bold'>Explore Your Favourite Books</h1>
        <hr className='mt-3'></hr>
      </div>
      <div className='mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {
            book.map((item) => (
                <Cards items = {item} key={item.id}/>
            ))
        }
      </div>
    </div>
  </>
  )
}

export default Explore