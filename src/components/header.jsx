import { useNavigate } from "react-router-dom";
import Autocomplete from "./autocomplete";
import { useState } from "react";
import Dialog from "./dialog";
import LoginFrom from "./login-form";

const Header = () => {
  const [isOpen, setIsOpen] = useState(null)
  const navigate = useNavigate();

  const handelLogin = () => {
    navigate("/log-in");
  };

  const handelProfile = () => {
    navigate("/profile")
  }

  return (
    <nav className="w-full text-gray-200 bg-gray-800 bg-opacity-70 h-16 z-50 top-0 left-0 sticky">
      <div className="flex items-center justify-center h-full">
        <div className="w-[90%] md:w-1/2 flex items-center justify-center space-x-4">
        <button className="px-4 py-2 rounded-full border-2 border-gray-600 text-gray-200 text-sm font-semibold font-sans cursor-pointer hover:bg-gray-600 transition"
            onClick={handelProfile}>
              Profile
        </button>
          <Autocomplete />
          <button
            className="px-4 py-2 rounded-full border-2 border-gray-600 text-gray-200 text-sm font-semibold font-sans cursor-pointer hover:bg-gray-600 transition"
            onClick={handelLogin}
          >
            Login
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="absolute border-2 bg-gradient-to-r from-slate-500 hover:from-slate-800 hover:to-slate-500 transition-all duration-700 px-3 py-1 rounded-3xl md:right-2 md:top-3/4 -mt-5 transform -translate-y-1/2"
          onClick={() => setIsOpen(true)}
        >
          login
        </button>
      </div>
      <Dialog width="w-[90%] md:w-1/2" isOpen={isOpen} setIsOpen={setIsOpen}>
        <LoginFrom onSuccessfulSubmit={() => setIsOpen(false)} />
      </Dialog>
    </nav>
  );
};

export default Header;
