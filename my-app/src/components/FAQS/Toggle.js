import React, { useState } from 'react'

const Toggle = () => {

    const[toggle, setToggle] =useState(true)


  return (
    <div  style={{margin: "1rem ", backgroundColor : "pink", padding: "1rem "}}>
            {toggle && (
                      <p>Nonumy diam sit amet et sea kasd amet, elitr takimata eos takimata amet no 
                      clita stet invidunt kasd, voluptua diam ipsum dolor rebum accusam ipsum takimata 
                      rebum. Gubergren eirmod ipsum tempor vero sed sit et sed. Et aliquyam sanctus 
                      lorem nonumy ut sit dolore ut, kasd dolores amet et sit. </p>
            )}

            <div style={{textAlign: "center"}}>
            <button onClick={()=>{setToggle(!toggle)}}> {toggle ? "Hide" : "Show "}</button>
    
            </div>
    </div>

   
  )
}

export default Toggle