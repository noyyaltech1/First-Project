// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
 import './App.css'
import {useState} from 'react'
import './components/HookCounter'
import HookCounter from './components/HookCounter'
import HookCounter2 from './components/HookCounter2'
import HookCounter3 from './components/HookUsestateObject'
import HookCounter4 from './components/HookUsestateArray'
import HookUsestateObject from './components/HookUsestateObject'
import HookUsestateArray from './components/HookUsestateArray'
import HookUseEffect from './components/HookUseEffect'
import HookUseMouse from './components/HookUseMouse'
import MouseContainer from './components/MouseContainer'
//import FormValidation from './components/FormValidation'
import DropDown from './components/DropDown'
import SearchableSelect from './components/SearchableSelect'
import FormValidation from './components/FormValidation'
import HookUseCallback from './components/HookUseCallback'
import HookUsememo from './components/HookUsememo'



// //       //  const [name,setname]=useState("");
// //       //  const [email,setemail]=useState("");

// //       //  function handlename(e){
// //       //     setname(e.target.value);
// //       //  }
// //       const[form,setForm]=useState({
// //         // name:"",
// //         // defree:"",
// //         // email:"",
// //         // phone:"",
// //         // roles:[],
// //       });
      
// //        const handleform=(e)=>{
// //           const name=e.target.name,
// //           // const email=e.target.email,
// //           // const number=e.target.number,
// //           const value=e.target.value,
// //           setForm(values=>({...values,[name]:value}))

// //       }
      

 
function App() {
  return (
    <>
       <div>
            
          {/* <HookCounter/>
                     <HookCounter2/>
          <HookUsestateObject/>
           <HookUsestateArray/>
           <HookUseEffect/>
           <HookUseMouse/>
           <MouseContainer/> */}
           {/* <FormValidation/> */}
{/* /           <DropDown/> */}
          {/* <SearchableSelect/> */}
          <FormValidation/>
          {/* <HookUseCallback/>
          <HookUsememo/>
           */}
          
        </div>
<HookCounter2 />
      
               
                 
     </>
   )
 }

export default App;
