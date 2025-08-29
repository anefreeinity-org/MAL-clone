import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CreateNewAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onchange",
  });
  const onsubmit = (data) => console.log(data);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/log-in");
  };

  const handelHome = () => {
    navigate("/");
  };

  return (
    <div className="ml-20 mt-24">
      <form className="w-96" onSubmit={handleSubmit(onsubmit)}>
        <button
          onClick={handelHome}
          className="text-gray-400 text-sm font-semibold mb-10 text-center cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-blue-50 to-purple-50 hover:from-purple-500 hover:to-blue-500 transition duration-300"
        >
          Home
        </button>
        <div>
          <label className="text-gray-400 text-sm font-semibold">
            START FOR FREE
          </label>
          <h1 className="text-white text-4xl font-bold my-1">
            Create new account
          </h1>
        </div>
        <div className="text-sm my-3">
          <label className="text-gray-400">Already A Member?</label>
          <button
            className="text-blue-500 hover:text-blue-600 ml-1"
            onClick={handleLogin}
          >
            Log In
          </button>
        </div>

        <div className="flex flex-row my-2">
          <div>
            <label className="text-gray-400 text-xs">First name</label>
            <input
              className={`w-11/12 h-10 rounded-xl shadow-md text-white bg-gray-700 ${
                errors?.firstName
                  ? "border-2 border-red-600"
                  : "hover:border-2 border-blue-600"
              } focus:outline-none focus:shadow-lg transition duration-500 pl-4 text-sm font-semibold`}
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
              <p className="text-white">
                First name can't exceed 20 characters
              </p>
            )}
            {errors?.firstName?.type === "pattern" && (
              <p className="text-white">Alphabetical characters only</p>
            )}
          </div>
          <div>
            <label className="text-gray-400 text-xs">Last name</label>
            <input
              className="w-11/12 h-10 rounded-xl shadow-md text-white bg-gray-700 hover:border-2 border-blue-600 focus:outline-none focus:border-blue-500 focus:shadow-lg transition duration-500 pl-4 ml-4 text-sm font-semibold"
              {...register("lastName", {
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.lastName?.type === "pattern" && (
              <p className="text-white">Alphabetical characters only</p>
            )}
          </div>
        </div>
        <div className="my-2 flex flex-col">
          <label className="text-gray-400 text-xs my-2">Email</label>
          <input
            className="w-auto h-10 rounded-xl shadow-md text-white bg-gray-700 hover:border-2 border-blue-600 focus:outline-none focus:border-blue-500 focus:shadow-lg transition duration-500 pl-4 text-sm font-semibold"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          {errors?.email?.type === "required" && (
            <p className="text-white">This field is required</p>
          )}
          {errors?.email?.type === "pattern" && (
            <p className="text-white">Invalid email address</p>
          )}
          <label className="text-gray-400 text-xs my-2">Password</label>
          <input
            type="password"
            className="w-auto h-10 rounded-xl shadow-md text-white bg-gray-700 hover:border-2 border-blue-600 focus:outline-none focus:border-blue-500 focus:shadow-lg transition duration-500 pl-4 text-sm font-semibold"
            {...register("password", {
              required: true,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
            })}
          />
          {errors?.password?.type === "required" && (
            <p className="text-white">This field is required</p>
          )}
          {errors?.password?.type === "pattern" && (
            <p className="text-white">
              Password must be at least 8 characters, include uppercase,
              lowercase, number, and special character
            </p>
          )}
        </div>
        <input
          className="bg-blue-500 hover:bg-blue-600  text-white rounded-full font-semibold px-4 py-2 my-4 transition duration-300 cursor-pointer"
          type="submit"
          value="Create account"
        />
      </form>
    </div>
  );
};

export default CreateNewAccount;
