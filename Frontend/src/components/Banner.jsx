import React from "react";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center my-10">
        <div className="order-2 md:order-1 w-full  md:w-1/2 mt-12  md:mt-32">
          <div className="space-y-12 ">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-teal-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et totam
              impedit labore nulla quos commodi aliquid praesentium, veritatis
              corporis neque?
            </p>
            <label className="input input-bordered input-accent  flex items-center gap-2">
              Email |
              <input
                type="text"
                className="grow"
                placeholder="talha@site.com"
              />
            </label>
          </div>
          <button className="mt-6 btn btn-accent">Accent</button>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2 ">
          <img
            src="hello.webp"
            alt=""
            className="w-92 h-92 md:ml-12 rounded-2xl border-2 border-teal-500 "
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
