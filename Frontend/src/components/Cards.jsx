import React from "react";

const Cards = ({ item }) => {
  return (
    <>
      <div className="rounded-xl bg-neutral w-96 shadow-xl my-10  ">
        <div className="flex h-75">
          <div className="p-3 min-w-[50%] ">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl h-full object-cover "
            />
          </div>
          <div className="card-body items-center text-left ">
            <h2 className="card-title text-teal-500">Brave New World </h2>
            <p>
              If a dog chews shoes whose shoes does he choose? sdfsdf asfd asdf
              sdf asf asdf
            </p>
          </div>
        </div>
        <div className="p-3 flex justify-between">
          <div className="card-actions flex flex-col ">
            <div className="badge badge-outline">Category: Fantesy</div>
            <div className="badge badge-outline">Cost: $0</div>
          </div>
          <div className="card-actions">
            <button className="btn btn-outline btn-accent">Read Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
