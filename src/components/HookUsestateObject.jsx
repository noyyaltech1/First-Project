import React from "react";
import { useState } from "react";
function HookUsestateObject(){
    const [name,setname]=useState({firstName:" ",lastName:" "});
    return(
        <>
        <h1>UseState with objects</h1>
        <input type="text" value={name.firstName} onChange={e=>setname({...name,firstName:e.target.value})}></input>
        <input type="text" value={name.lastName} onChange={e=>setname({...name,lastName:e.target.value})}></input>
        <p>FirstName:{name.firstName}</p>
        <p>LastName:{name.lastName}</p>
        </>
    )
}
export default  HookUsestateObject;