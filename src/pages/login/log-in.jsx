import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="w-96 m-0" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col">
          <label className="text-white mb-1">First name</label>
          <input
            className="w-auto p-2 rounded"
            {...register("firstName", { required: true, maxLength: 20 })}
          />
        </div>

        <div className="mb-4 flex flex-col">
          <label className="text-white mb-1">Last name</label>
          <input
            className="w-auto p-2 rounded"
            {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
          />
        </div>

        <div className="mb-4 flex flex-col">
          <label className="text-white mb-1">Age</label>
          <input
            className="w-auto p-2 rounded"
            type="number"
            {...register("age", { min: 18, max: 99 })}
          />
        </div>

        <div className="flex justify-center">
          <input
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full transition duration-300 cursor-pointer"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
