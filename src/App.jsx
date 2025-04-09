import React, { use } from "react";
import { useState } from "react";

function Addition(){

  
  const [count,setcount]=useState(0)
  function increasing(){
    setcount(count+1)
  }

  function decreasing(){
    setcount(count-1)
  }
  return(
    <div>
<button onClick={increasing}>Add</button>
<h2>{count}</h2>
<button onClick={decreasing}>Negative</button>

    </div>

  )
}
export default Addition