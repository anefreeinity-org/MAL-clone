import { useEffect, useState } from "react";

const LeftShift = ({ scrollContainerRef }) => {
  const [isScrollable, setIsScrollable] = useState(true);

  const handleLeftClick = (scrollContainerRef) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 200;
      handelIsScrollable();
    }
  };

  const handelIsScrollable = () => {
    if (scrollContainerRef.current) {
      setIsScrollable(scrollContainerRef.current.scrollLeft > 50);
    }
  };

  useEffect(() => {
    handelIsScrollable();
  }, []);

  return (
    <div
      className={`px-4 py-2 w-8 absolute top-1/2 -translate-y-1/2 left-2 opacity-0 ${
        isScrollable ? "group-hover:opacity-100" : "group-hover:opacity-70"
      } transition-opacity duration-300 cursor-pointer`}
      onClick={() => handleLeftClick(scrollContainerRef)}
      onMouseOver={handelIsScrollable}
      onMouseOut={handelIsScrollable}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48px"
        height="48px"
        viewBox="0 0 48 48"
      >
        <circle cx="24" cy="24" r="22" fill="#FAFAFA" strokeWidth="2" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          width="24px"
          viewBox="0 -960 960 960"
          fill="#000000"
          x="12"
          y="12"
        >
          <path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" />
        </svg>
      </svg>
    </div>
  );
};

export default LeftShift;
