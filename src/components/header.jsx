import { useNavigate } from "react-router-dom";
import Autocomplete from "./autocomplete";

const Header = () => {
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
    </nav>
  );
};

export default Header;
