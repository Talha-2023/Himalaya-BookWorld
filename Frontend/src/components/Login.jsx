import { useForm } from "react-hook-form";

import { HiLogin } from "react-icons/hi";
import { Link } from "react-router-dom";

import React from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box dark:bg-[#2B3440] ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg flex gap-1">
            Login <HiLogin className="mt-1.5 text-teal-500" />
          </h3>
          <div className="card  w-full ">
            <form className="card-body px-0" onSubmit={handleSubmit(onSubmit)}>
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
                  <span className="text-sm text-red-600 absolute top-10 left-14">
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
                  <span className="text-sm text-red-600 absolute top-[134px] left-20">
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
                  <p className="text-sm text-gray-500">Not registered?</p>
                  <Link
                    to="/signup"
                    className="mx-2 underline -mt-0.5"
                    onClick={() =>
                      document.getElementById("my_modal_3").close()
                    }
                  >
                    Sign Up
                  </Link>
                </div>
                <div className="flex justify-end w-full sm:w-auto order-1 sm:order-2">
                  <button className="btn btn-accent w-full sm:w-auto">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Login;
