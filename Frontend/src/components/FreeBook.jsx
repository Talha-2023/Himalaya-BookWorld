import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";

const FreeBook = () => {
  const filterData = list.filter((data) => data.price === 0);
  console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      <div className="max-w-screen-2xl container mx-auto mt-40 md:px-20 px-4">
        <div>
          <h1 className="text-4xl font-semibold ">Free Offered Books</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            vero numquam rerum praesentium, excepturi magni neque doloremque.
            Corrupti repudiandae eius et deserunt magni quas adipisci saepe
            voluptate, sed ipsa similique.
          </p>
        </div>
        <div className="flex flex-wrap justify-evenly mt-12">
          {filterData.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FreeBook;
