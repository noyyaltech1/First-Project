import React from "react";
import { useState } from "react";
function HookCounter(){
    const [count,setcount]=useState(0);
    return(
        <div>
        <h1>USESTATE</h1>
        <button onClick={()=>setcount(count+1)}>Count {count}</button>

        
        </div>
    )
}
export default HookCounter;