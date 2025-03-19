const useDebounce = (debounceTimeoutRef, callback, delay) => {
  if (debounceTimeoutRef.current) {
    clearTimeout(debounceTimeoutRef.current);
  }

  debounceTimeoutRef.current = setTimeout(() => {
    callback();
  }, delay);
};

export default useDebounce;
