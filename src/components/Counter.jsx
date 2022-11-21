import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = (iteration = 1) => {
    setCount((prevCount) => prevCount + iteration);
  };

  const decrementHandler = (iteration = 1) => {
    setCount((prevCount) => prevCount - iteration);
  };
  const resetHandler = () => {
    setCount(0);
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => incrementHandler(5)}>Increment five</button>
      <button onClick={() => incrementHandler(10)}>Increment ten</button>
      <button onClick={() => decrementHandler(5)}>Decrement five</button>
      <button onClick={() => decrementHandler(10)}>Decrement ten</button>
      <button onClick={resetHandler}>Reset counter</button>
    </div>
  );
};

export default Counter;
