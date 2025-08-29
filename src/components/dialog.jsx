import { useEffect, useRef } from "react";

const Dialog = ({ isOpen, setIsOpen, width, children }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div
        ref={dialogRef}
        className={`bg-gray-900 rounded-lg shadow-lg ${width ?? "w-full"
          } p-2 relative`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="px-1 py-1 bg-gray-600 rounded-full hover:bg-gray-500 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
