import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MouseContainer from "./MouseContainer";
function HookUseMouse(){
    const [x,setx]=useState(0);
    const [y,sety]=useState(0);
    
    const mousePosition=e=>{
        console.log("mouseevent");
        setx(e.clentX);
        setx(e.clientY);
    }
    useEffect(()=>{

        console.log(`UseEffect called`);
        window.addEventListener(`mousemove`,mousePosition);
        return()=>{
            console.log("It stopped");
            window.removeEventListener(`mousemove`,mousePosition);
        }
    },[] )

      return (
        <>
        Coordinates X-{x} Y-{y}
      
        </>
    )
    
}
export default HookUseMouse;