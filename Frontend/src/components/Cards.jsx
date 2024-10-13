import React from "react";

const Cards = ({ item }) => {
  return (
    <>
      <div className="rounded-xl bg-neutral w-96 shadow-xl my-10">
        <div className="flex h-[280px] ">
          <div className="p-3 min-w-[50%] ">
            <img
              src={item.image}
              alt="Shoes"
              className="rounded-xl object-cover h-full"
            />
          </div>
          <div className="card-body overflow-hidden  px-3">
            <h2 className="card-title text-teal-500 text-base sm:text-lg">
              {item.name}
            </h2>
            <p>{item.title}</p>
          </div>
        </div>
        <div className="p-3 flex justify-between">
          <div className="card-actions flex flex-col ">
            <div className="badge badge-outline whitespace-nowrap">
              Category: {item.category}
            </div>
            <div className="badge badge-outline badge-accent">
              Cost: ${item.price}
            </div>
          </div>
          <div className="card-actions">
            <button className="btn btn-accent  hover:bg-transparent hover:text-accent hover:border hover:border-accent">
              Read Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
