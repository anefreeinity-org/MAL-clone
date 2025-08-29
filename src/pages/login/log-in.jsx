import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const navigate = useNavigate();

  const handleCreateNewAccount = () => {
    navigate("/create-new-account");
  };

  const handelHome = () => {
    navigate("/");
  }

  return (
    <div className="flex min-h-screen ml-20 mt-24">
      <form className="w-96" onSubmit={handleSubmit(onSubmit)}>
        <button
          onClick={handelHome}
          className="text-gray-400 text-sm font-semibold mb-10 text-center cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-blue-50 to-purple-50 hover:from-purple-500 hover:to-blue-500 transition duration-300"
        >
          Home
        </button>
        <h1 className="text-white text-4xl font-bold mb-2">Welcome Back</h1>
        <label className="text-gray-400 text-sm">Sign in your account</label>
        <div className="mb-4 mt-5 flex flex-col">
          <label className="text-gray-400 text-xs my-2">
            Email or username
          </label>
          <input
            className="w-auto h-10 rounded-xl shadow-md text-white bg-gray-700 hover:border-2 border-blue-600 focus:outline-none focus:border-blue-500 focus:shadow-lg transition duration-500 pl-4 text-sm font-semibold"
            {...register("firstName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.firstName?.type === "required" && (
            <p className="text-white">This field is required</p>
          )}
          {errors?.firstName?.type === "maxLength" && (
            <p className="text-white">First name can't exceed 20 characters</p>
          )}
          {errors?.firstName?.type === "pattern" && (
            <p className="text-white">Alphabetical characters only</p>
          )}
        </div>

        <div className="mb-4 flex flex-col">
          <label className="text-gray-400 text-xs my-2">Password</label>
          <input
            className="w-auto h-10 rounded-xl shadow-md text-white bg-gray-700 hover:border-2 border-blue-600 focus:outline-none focus:border-blue-500 focus:shadow-lg transition duration-500 pl-4 text-sm font-semibold"
            {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
          />
          {errors?.lastName?.type === "pattern" && (
            <p className="text-white">Alphabetical characters only</p>
          )}
        </div>

        {/* <div className="mb-4 flex flex-col">
          <label className="text-white mb-1">Age</label>
          <input
            className="w-auto p-2 rounded"
            type="number"
            {...register("age", { min: 18, max: 99 })}
          />
          {errors.age && (
            <p className="text-white">
              You must be older then 18 and younger then 99 years old
            </p>
          )}
        </div> */}

        <div className="flex justify-center">
          <input
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-40 py-2 mt-8 rounded-full transition duration-300 cursor-pointer"
            type="submit"
            value="Sign in"
          />
        </div>

        <div className="text-sm my-8 ml-20">
          <label className="text-gray-400">Don't have any account?</label>
          <button
            className="text-blue-500 hover:text-blue-600 ml-1"
            onClick={handleCreateNewAccount}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
