import Autocomplete from "./autocomplete";

const Header = () => {
  return (
    <nav className="w-full text-gray-200 bg-gray-800 bg-opacity-70 h-16 z-50 top-0 left-0 sticky">
      <div className="flex items-center justify-center h-full">
        <div className="w-[90%] md:w-1/2">
          <Autocomplete />
        </div>
      </div>
    </nav>
  );
};

export default Header;
