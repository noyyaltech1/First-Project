
import { useState, useMemo } from "react";

function HookUsememo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alex");

  const result = useMemo(() => {
    console.log("Calculating result...");

    return count * 2;
  }, [count]);

  console.log("Component rendered");

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Result: {result}</h2>
      <h2>Name: {name}</h2>

      <button onClick={() => setCount(c => c + 1)}>
        Increment Count
      </button>

      <button onClick={() => setName("Sam")}>
        Change Name
      </button>
    </div>
  );
}

export default HookUsememo;
