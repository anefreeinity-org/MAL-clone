import { useEffect, useState } from "react";

const RightShift = ({ scrollContainerRef, isScrollable }) => {
  //   const [isScrollable, setIsScrollable] = useState(true);

  const handleRightClick = (scrollContainerRef) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 200;
      console.log("scrollLeft", scrollContainerRef.current.scrollLeft);
      //   handelIsScrollable();
    }
  };

  //   const handelIsScrollable = () => {
  //     const sc =
  //       scrollContainerRef.current.scrollLeft +
  //         scrollContainerRef.current.clientWidth >=
  //       scrollContainerRef.current.scrollWidth;
  //     console.log(sc);
  //     if (scrollContainerRef.current) {
  //       setIsScrollable(
  //         scrollContainerRef.current.scrollLeft +
  //           scrollContainerRef.current.clientWidth >=
  //           scrollContainerRef.current.scrollWidth
  //       );
  //     }
  //   };

  //   useEffect(() => {
  //     handelIsScrollable();
  //   }, []);

  return (
    <div
      className={`px-4 py-2 w-8 absolute top-1/2 -translate-y-1/2 left-2 opacity-0 ${
        isScrollable ? "group-hover:opacity-100" : "group-hover:opacity-50"
      } transition-opacity duration-300 cursor-pointer`}
      onClick={() => handleRightClick(scrollContainerRef)}
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
          width="24px"
          height="24px"
          viewBox="0 -960 960 960"
          fill="#000000"
          x="12"
          y="12"
        >
          <path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z" />
        </svg>
      </svg>
    </div>
  );
};

export default RightShift;
