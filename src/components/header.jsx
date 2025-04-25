import Autocomplete from "./autocomplete";
import { useState } from "react";
import Dialog from "./dialog";
import LoginFrom from "./login-form";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full text-gray-200 bg-gray-800 bg-opacity-70 md:h-16 h-24 z-50 top-0 left-0 sticky">
      <div className="flex justify-center md:items-center mt-2 h-full">
        <div className="w-[90%] md:w-1/2">
          <Autocomplete />
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
