import React from "react";
import { useState } from "react";
function HookUsestateArray(){
    const [item,setitems]=useState([]);
    const addItem=()=>{
        setitems([...item,{
            id:item.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
    return(
        <>
        <h1>UseState with array</h1>
        <button onClick={addItem}>
            Add a Number
        </button>
        <ul>
            {
                item.map(add=>(
                    <li key={add.id}>
                        {add.value}
                    </li>
                )
            )
            }
        </ul>
        
        </>
    )
}
export default HookUsestateArray