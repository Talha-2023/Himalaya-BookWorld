import React from "react";
import Swipper from "./Swipper";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col gap-5 md:flex-row items-center pt-16 text-[#1F2937] dark:text-[#A6ADBB] ">
        <div className=" w-full  md:w-1/2 mt-12  md:mt-32">
          <div className="space-y-12 ">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-teal-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Explore new ideas and unlock your potential with every book. Your
              next great read is waiting to inspire, teach, and transform your
              journey!"{" "}
            </p>
            <label className="input input-bordered input-accent whitespace-nowrap dark:bg-[#1E232A]  flex items-center gap-2">
              Email |
              <input type="text" className="grow" placeholder="name@site.com" />
            </label>
          </div>
          <button className="mt-6 btn btn-accent">Accent</button>
        </div>
        <div className=" w-full mt-10 md:w-1/2  ">
          <Swipper />
          {/* <img
            src="hello.webp"
            alt=""
            className="w-92 h-92 md:ml-12 rounded-2xl border-2 border-teal-500 "
          /> */}
        </div>
      </div>
    </>
  );
};

export default Banner;
