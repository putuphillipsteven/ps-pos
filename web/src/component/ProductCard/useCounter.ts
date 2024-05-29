import { useState } from "react";

const useCounter = (value: any) => {
  const [count, setCount] = useState(value);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(1);
  };
  return [count, increment, decrement, reset];
};

export default useCounter;
