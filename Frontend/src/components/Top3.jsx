import React from "react";
import list from "../../public/list.json";
import { IoArrowDown } from "react-icons/io5";

const Top3 = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto mt-40 md:mt-40 md:px-20 px-4 flex flex-col justify-center items-center  lg:h-fit h-[400px]">
      <a href="#paidBook">
        <button
          id="paidBook"
          className="btn btn-accent  hover:bg-transparent hover:text-accent hover:border hover:border-accent"
        >
          <IoArrowDown className="text-2xl" />
        </button>
      </a>
      <div className="lg:w-1/2 flex flex-col items-center mt-28">
        <h1 className="text-3xl sm:text-4xl text-center md:text-5xl lg:text-5xl font-bold leading-tight lg:mt-6 sm:mt-8 md:mt-10 ">
          🔥 Top 3 Most Read Books of 2024
        </h1>
      </div>
      <div className="lg:w-1/2 flex flex-col items-center lg:mt-28 scale-50 sm:scale-75 md:scale-90 lg:scale-100  h-fit ">
        <div className="relative flex gap-5 lg:mt-28 mt-0 ">
          <img src="board.png " alt="board" className="mt-52 min-w-[900px]" />
          <div className="absolute  -top-8 left-[158px]  flex gap-8 ">
            <img
              src="FourthWing.jpg"
              alt=""
              className="w-44 rounded dark:shadow-gray-900 hover:shadow-gray-900 shadow-2xl transition-transform  duration-300 hover:-translate-y-3 cursor-pointer "
            />
            <img
              src="LessonsInChemistry.jpg"
              alt=""
              className="w-44 rounded dark:shadow-gray-900 hover:shadow-gray-900 shadow-2xl transition-transform duration-300 hover:-translate-y-3 cursor-pointer  "
            />{" "}
            <img
              src="Spare.jpg"
              alt=""
              className="w-44 rounded dark:shadow-gray-900 hover:shadow-gray-900 shadow-2xl transition-transform duration-300 hover:-translate-y-3 cursor-pointer  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top3;
