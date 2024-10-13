import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";

const FreeBook = () => {
  const filterData = list.filter((data) => data.price === 0);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto mt-20 md:mt-40 md:px-20  px-4">
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
