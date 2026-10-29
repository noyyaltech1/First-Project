import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import HookUseMouse from "./HookUseMouse";
function MouseContainer(){
    const[display,setdisplay]=useState(true);
    return(
        <>
        <h1>Toogle</h1>
        <button onClick={()=>setdisplay(!display)}>Toogle
        </button>
        {display && <HookUseMouse/>}
        </>
    )

}
export default MouseContainer;