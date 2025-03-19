import useDebounce from "./use-debounce";

const useInfiniteScroll = (
  containerRef,
  debounceTimeoutRef,
  callback,
  delay
) => {
  const container = containerRef.current;
  if (!container) return;

  if (
    container.scrollHeight - container.scrollTop <=
    container.clientHeight + 1
  ) {
    useDebounce(debounceTimeoutRef, callback, delay);
  }
};

export default useInfiniteScroll;
