import React from "react";

const Contact = () => {
  return (
    <section className="bg-white dark:bg-[#1E232A] pt-16 ">
      <div className="py-8 pb-[22px] px-4 mx-auto max-w-screen-md ">
        <h2 className="mb-4 text-4xl font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 text-center text-gray-500 dark:text-gray-400">
          Got a question about our collection or need help finding your next
          read? Reach out to us! Fill out the form below, and we’ll get back to
          you soon.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border text-sm rounded-lg w-full p-2.5  dark:bg-neutral dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="name@site.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-gray-50 border text-sm rounded-lg w-full p-3  dark:bg-neutral dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="bg-gray-50 border text-sm rounded-lg w-full p-2.5  dark:bg-neutral dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button type="submit" className=" btn btn-accent">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
