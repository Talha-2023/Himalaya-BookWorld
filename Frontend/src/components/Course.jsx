import React from "react";
import { IoArrowDown } from "react-icons/io5";
import Cards from "./Cards";
import list from "../../public/list.json";

const Course = () => {
  const filterData = list.filter((data) => data.price > 0);

  return (
    <>
      <div className="  mt-28 max-w-screen-2xl container mx-auto md:px-20 px-4hero  min-h-screen">
        <div className="hero-content text-center ">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Your Presence Brightens Our Day! Welcome 😊
            </h1>
            <p className="py-6">
              Unlock a world of knowledge with our paid book section! Discover
              expertly written titles that offer unique perspectives and
              valuable insights. Your next great read awaits!
            </p>
            <a href="#paidBook">
              <button
                id="paidBook"
                className="btn btn-accent  hover:bg-transparent hover:text-accent hover:border hover:border-accent"
              >
                <IoArrowDown className="text-2xl" />
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly">
          {filterData.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
