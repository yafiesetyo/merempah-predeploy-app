import React, { useState, useEffect } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const handleChange = (e) => {
    let value = e.target.value;
    setCount(parseInt(value));
  };
  useEffect(() => {
    setCount(props.count);
  }, []);
  return (
    <>
      <input style={{ display: "none" }} value={props.id} />
      <button className="quantity-button minus" onClick={decrement}>
        -
      </button>
      <input
        type="text"
        value={count}
        className="quantity-count-input text-center"
        onChange={handleChange}
      />
      <button className="quantity-button plus" onClick={increment}>
        +
      </button>
    </>
  );
};

export default Counter;
