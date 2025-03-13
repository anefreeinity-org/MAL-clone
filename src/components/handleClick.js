export const handleLeftClick = (scrollContainerRef) => {
  if (scrollContainerRef.current) {
    const newPosition = scrollContainerRef.current.scrollLeft -= 200;
    console.log("new poisition is", newPosition)
  }
  console.log("left arrow was clicked");
};

export const handleRightClick = (scrollContainerRef) => {
  if (scrollContainerRef.current) {
    const newPosition = scrollContainerRef.current.scrollLeft += 200;
    console.log("new poisition is", newPosition)
  }
  console.log("left arrow was clicked");
};
