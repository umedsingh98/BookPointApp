import React, { useRef, useState, useEffect } from "react";

import Cards from "../components/Cards.jsx";
//for crousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

function FreeBook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookappbackend-99zi.onrender.com/book/bookportal");
        console.log(res.data);
        setBook(res.data.filter((data) => data.category === "Free"));
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum, consectetur
            adipisicing elit. Accusantium veritatis alias pariatur ad dolor
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards items={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
