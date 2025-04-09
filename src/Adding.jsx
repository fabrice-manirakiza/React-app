import React from "react";
import { useState } from "react";

function Adding(){
    const [count,setcount]=useState(0)

    
    return(
        <div>


        <button onClick={()=>setcount(count-1)}>-</button>
        <h2>{count}</h2>
        <button onClick={()=>setcount(count+1)}>+</button>
        </div>
    )
}
export default Adding