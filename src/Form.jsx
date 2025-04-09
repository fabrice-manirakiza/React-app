import React from "react";
import { useState } from "react";

function Checking(){

    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    function handlechange(e){
        e.preventDefault()
    }
return(
    <div>
<h1>loginto account</h1>
 <form onSubmit={handlechange}>

<div>
<input type="email"
    name="email"
    value={email}
    onChange={(e)=>setemail(e.target.value)}
    required />
</div>
   <div>
   <input type="password"
    name="password"
    value={password}
    onChange={(e)=>setpassword(e.target.value)}
    required />
    <button>SUBMIT</button>
   </div>

   
 </form>
    </div>
)

    
}

export default Checking
