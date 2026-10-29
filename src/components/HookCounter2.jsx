
import { useState } from "react";

let inc = 1;

function HookCounter2() {
  const initial = 0;

  const [count, setCount] = useState(initial);
  const [count2, setCount2] = useState(initial);

  console.log("Before loop:", {count, count2, inc});

  let inc2 = 1

  function incrementFiveDirectly(a, b) {

    

    for (let i = 0; i < 5; i++) {
      setCount(prev => {
        console.log({prev});
        
        return prev + 1
    });

      console.log("Loop:", {i, count, count2});
        //old rendering value use pannuthu
      setCount2(() => {
        console.log({count2});
        
        return count2 + 1
    });
    }

    console.log("After loop:", count2);
  }

  const updateBy5 = () => {
    setCount(prev => prev + 5);
    setCount2(prev => prev + 5);
  };


  const a = () => console.log("test");
  a();


  return (
    <>
      <p>Count: {count}</p>
      <p>Count2: {count2}</p>

      <button onClick={incrementFiveDirectly}>
        Increment 5 by Loop
      </button>

      <button onClick={updateBy5}>
        Increment 5 by Direct
      </button>

      <button onClick={() => {
        setCount(initial);
        setCount2(initial);
      }}>
        Reset
      </button>
      <br />
      INC : {inc}
      <button onClick={() => {
        inc += 1
        inc2 += 1
      }}>Inc</button>
    </>
  );
}

export default HookCounter2;
