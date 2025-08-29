import { useState } from "react";

const Addtolist = () => {
  const [isAdded, setIsAdded] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleAddToList = () => {
    if (isAdded) {
      setIsAdded(null);
      setShowOptions(false);
    } else {
      setShowOptions(true);
    }
  };

  const handleOptionClick = (option, ) => {
    console.log(option);
    setIsAdded(option);
    setShowOptions(false);
  }

  return (
    <button
      className="flex bg-gray-200 rounded-3xl px-5 py-2 hover:bg-gray-300 hover:scale-110 hover:border-black transition-all duration-300 ease-in-out"
      onClick={handleAddToList}
    >
      {isAdded ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="black"
          >
            <path d="M200-440v-80h560v80H200Z" />
          </svg>
      ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="black"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
      )}
      {isAdded ? "Remove from List" : "Add to List"}
      {showOptions && !isAdded && (
        <div className="absolute  w-36 bg-white border rounded-lg shadow-lg z-10">
          <div
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => handleOptionClick("Watching")}
          >
            Watching
          </div>
          <div
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => handleOptionClick("Completed")}
          >
            Completed
          </div>
          <div
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => handleOptionClick("On Hold")}
          >
            On Hold
          </div>
          <div
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => handleOptionClick("Dropped")}
          >
            Dropped
          </div>
          <div
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => handleOptionClick("Plan To Watch")}
          >
            Plan To Watch
          </div>
        </div>
      )}
    </button>
  );
};

export default Addtolist;
