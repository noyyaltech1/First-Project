import React from "react";
import { useState } from "react";

function DropDown(){
     const Fruits=[
            "Apple",
            "Orange",
            "Banana",
            "Grapes",
            "PineApple"
        ]
        const[serach,setserach]=useState("");
        const[box,setbox]=useState("");
        
        const filtered=Fruits.filter((e)=>e.toLowerCase().includes(serach.toLowerCase()));

    return(
        <>
       
        <div>
             <h4> DropDown Box search Option</h4>
             <label>Select a Fruit
                <input type="search" placeholder="Search it"  value={serach} onChange={(e)=>setserach(e.target.value)}>
                </input>
             </label>
             
        <label>
            <select name="fruit" value={box} onChange={(e)=>setbox(e.target.value)}>
                <option value="apple">Apple</option>
                <option value="">Select a fruit</option>
                {filtered.map((f)=>(<option key={f} value={f}>{f}</option>))}
            </select>


        </label>
    
        </div>
       

        
        </>
    )
}
export default DropDown;