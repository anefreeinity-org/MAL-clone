const LoginFrom = ({ onSuccessfulSubmit }) => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());
    console.log(data);
    e.target.reset();
    if (onSuccessfulSubmit) onSuccessfulSubmit();
  };

  return (
    <form className="flex flex-col px-5 py-3 gap-4" onSubmit={handelSubmit}>
      <div className="flex flex-row items-center justify-center">
        <input
          className="px-3 bg-gray-800 border-2 md:w-[85%] w-full border-gray-400 py-2 rounded-xl"
          type="text"
          name="email"
          placeholder="Email"
        />
      </div>
      <div className="flex flex-row items-center justify-center">
        <input
          className="px-3 bg-gray-800 border-2 md:w-[85%] w-full border-gray-400 py-2 rounded-xl"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <div className="flex pt-7 flex-row items-center justify-center">
        <button
          className="px-7 py-2 rounded-3xl bg-blue-600 hover:bg-blue-500"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginFrom;
