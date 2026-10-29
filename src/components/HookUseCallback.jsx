import React from "react";
import { useRef } from "react";
import { useState, useCallback, memo } from "react";
const Child = memo(function Child({ handleClick }) {
  console.log("Child rendered");

  return (
    <button onClick={handleClick}>
      Click Child
    </button>
  );
});
function HookUseCallback(){
    const [count, setCount] = useState(0);

  console.log("Parent rendered");

  const handleClick = useCallback(() => {
    console.log("Child button clicked!");
  }, []);


  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(c => c + 1)}>
        Increment Parent
      </button>

      <Child handleClick={handleClick} />
    </div>
  );
}
export default HookUseCallback;




