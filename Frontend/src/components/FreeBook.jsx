import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { IoArrowDown } from "react-icons/io5";

const FreeBook = () => {
  const filterData = list.filter((data) => data.price === 0);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto mt-20 md:mt-40 md:px-20 px-4 flex flex-col justify-center items-center">
        <div className="lg:w-1/2 flex flex-col items-center gap-2">
          <h1 className="text-3xl sm:text-4xl text-center md:text-5xl lg:text-5xl font-bold leading-tight mt-6 sm:mt-8 md:mt-10">
            Free Offered Books 📚
          </h1>
          <p className=" px-4 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl text-center">
            Discover a selection of free books, carefully curated to spark your
            curiosity. From timeless classics to modern favorites, dive into new
            worlds and expand your knowledge without spending a dime!
          </p>
        </div>
        <div className="flex flex-wrap justify-evenly mt-12 ">
          {filterData.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FreeBook;
