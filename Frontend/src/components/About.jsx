import React from "react";
import { PiBooksLight } from "react-icons/pi";
import { BsCurrencyDollar } from "react-icons/bs";

const About = () => {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="relative p-6 md:p-16">
          <div className="relative  lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2 className="text-2xl  font-bold sm:text-3xl dark:text-[#A6ADBB] mt-10">
                At Himalaya Bookstore, we offer:
              </h2>
              <section
                className="grid gap-16 mt-5 md:mt-10"
                aria-label="Tabs"
                role="tablist"
                aria-orientation="vertical"
              >
                <span className="flex gap-x-6">
                  <PiBooksLight className=" shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600  dark:hs-tab-active:text-blue-500 dark:text-[#A6ADBB]" />
                  <span className="grow">
                    <span className="text-teal-500 block text-lg font-semibold hs-tab-active:text-blue-600  dark:hs-tab-active:text-blue-500 ">
                      A Wide Collection of Books
                    </span>
                    <span className="block mt-1  dark:hs-tab-active:text-gray-200 dark:text-[#A6ADBB]">
                      From timeless classics to the latest bestsellers, we have
                      a book for every reader.
                    </span>
                  </span>
                </span>

                <span className="flex gap-x-6">
                  <BsCurrencyDollar className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600  dark:hs-tab-active:text-blue-500 dark:text-[#A6ADBB]" />

                  <span className="grow">
                    <span className=" text-teal-500  block text-lg font-semibold hs-tab-active:text-blue-600  dark:hs-tab-active:text-blue-500 ">
                      Free Resources
                    </span>
                    <span className="block mt-1  dark:hs-tab-active:text-gray-200 dark:text-[#A6ADBB]">
                      We believe that knowledge should be accessible, which is
                      why we offer a selection of free books and resources.
                    </span>
                  </span>
                </span>

                <span className="flex gap-x-6">
                  <svg
                    className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600  dark:hs-tab-active:text-blue-500 dark:text-[#A6ADBB]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M19 17v4" />
                    <path d="M3 5h4" />
                    <path d="M17 19h4" />
                  </svg>
                  <span className="grow">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600  dark:hs-tab-active:text-blue-500 text-teal-500 ">
                      Curated Recommendations
                    </span>
                    <span className="block mt-1  dark:hs-tab-active:text-gray-200 dark:text-[#A6ADBB]">
                      Stuck on what to read next? Our team handpicks
                      recommendations to help you discover hidden gems.
                    </span>
                  </span>
                </span>
              </section>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div>
                  <div
                    id="tabs-with-card-1"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-1"
                  >
                    <img
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                      src="https://images.unsplash.com/photo-1604866830893-c13cafa515d5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Image 1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
