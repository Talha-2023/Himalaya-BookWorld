import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      {" "}
      <div
        id="my_modal_3"
        className="flex h-screen items-center justify-center lg:-mt-[178px] lg:pt-52 "
      >
        <div className="modal-box dark:bg-[#2B3440] ">
          <form method="dialog">
            <Link
              to="/ "
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg flex gap-1">Sign Up</h3>
          <div className="card  w-full ">
            <form className="card-body px-0" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-[#A6ADBB]">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered dark:text-[#A6ADBB] dark:bg-neutral dark:border-gray-600 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-sm text-red-600 absolute top-10 left-14">
                    *This field is required
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-[#A6ADBB]">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered dark:text-[#A6ADBB] focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-neutral dark:border-gray-600 dark:placeholder-gray-400"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-600 absolute top-[130px] left-14">
                    *This field is required
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-[#A6ADBB]">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered dark:text-[#A6ADBB] focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-neutral dark:border-gray-600 dark:placeholder-gray-400"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-600 absolute top-[225px] left-20">
                    *This field is required
                  </span>
                )}

                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover dark:text-[#A6ADBB]"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6 flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex flex-row items-start order-2 sm:order-1">
                  <p className="text-sm text-gray-500">Have Account?</p>
                  <Link
                    to="/"
                    className="mx-2 underline -mt-0.5"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </Link>
                </div>
                <div className="flex justify-end w-full sm:w-auto order-1 sm:order-2">
                  <button className="btn btn-accent w-full sm:w-auto">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
