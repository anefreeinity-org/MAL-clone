import Autocomplete from "./autocomplete";
import { useState } from "react";
import Dialog from "./dialog";
import LoginFrom from "./login-form";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full text-gray-200 bg-gray-800 bg-opacity-70 h-16 z-50 top-0 left-0 sticky">
      <div className="flex items-center justify-center h-full">
        <div className="w-[90%] md:w-1/2">
          <Autocomplete />
        </div>
      </div>
      <button
        className="absolute border-2 border-pink-400 bg-violet-600 px-3 py-1 rounded-3xl right-4 top-1/2 transform -translate-y-1/2"
        onClick={() => setIsOpen(true)}
      >
        login
      </button>
      <Dialog width="w-[90%] md:w-1/2" isOpen={isOpen} setIsOpen={setIsOpen}>
        <LoginFrom onSuccessfulSubmit={() => setIsOpen(false)} />
      </Dialog>
    </nav>
  );
};

export default Header;
