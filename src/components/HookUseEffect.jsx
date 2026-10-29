import React from "react";
import { useEffect } from "react";
import { useState } from "react";
function HookUseEffect(){
    const [count,setcount]=useState(0);
    const [name,setname]=useState({firstName:" "});
    useEffect(()=>{
        console.log('useeffect - document title')
        document.title=`You clicked ${count} times`;
    },[count])
        return(
            <div>
            <h1>UseEffect</h1>
            <p>here we giving parameter in useeffect to render the page when the count increases</p>
             <input type="text" value={name.firstName} onChange={e=>setname({...name,firstName:e.target.value})}></input>
            
            <p>FirstName:{name.firstName}</p>
           
            <button onClick={()=>setcount(count+1)}>Count {count}</button>
    
            
            </div>
        )
}
export default HookUseEffect;