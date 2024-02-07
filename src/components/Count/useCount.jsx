import { useState } from "react";
const useCount = (initialValue = 60) => {
  const [state, setState] = useState(initialValue);
  const increase = () => {
    setState((prev) => prev + 1);
  };
  const decrease = () => {
    setState((prev) => prev - 1);
  };
  const reset = () => {
    setState(0);
  };
  return [state, increase, decrease, reset];
};

export default useCount;
