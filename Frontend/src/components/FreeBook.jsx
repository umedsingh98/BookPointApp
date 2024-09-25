import React, { useRef, useState, useEffect } from "react";
import Cards from "../components/Cards.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

function FreeBook() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(
          "https://bookappbackend-99zi.onrender.com/book/bookportal"
        );
        console.log(res.data);
        setBook(res.data.filter((data) => data.category === "Free"));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getBook();
  }, []);

  const play = () => {
    if (sliderRef.current) sliderRef.current.slickPlay();
  };

  const pause = () => {
    if (sliderRef.current) sliderRef.current.slickPause();
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
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla
          non suscipit, iure neque earum, consectetur adipisicing elit.
          Accusantium veritatis alias pariatur ad dolor.
        </p>
      </div>

      <div>
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[200px] gap-2">
            {/* Spinner using Tailwind's animate-spin */}
            <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
            <h2 className="text-xl font-medium text-gray-600">Loading data...</h2>
          </div>
        ) : (
          <Slider {...settings} ref={sliderRef}>
            {book.length > 0 ? (
              book.map((item) => <Cards items={item} key={item.id} />)
            ) : (
              <p>No free courses available</p>
            )}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default FreeBook;
