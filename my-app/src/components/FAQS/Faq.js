import React, { useState } from 'react'

const Faq = (props) => {
   const{title, desc} =props.faq;
   const  [toggle,settoggle]= useState(false)
    console.log(desc);
  return (
    <article>
        <div>
            <h4> {title} </h4>
            <button onClick={()=>{settoggle(!toggle);}}> {toggle ? "-" : "+"}</button>
        </div>
        {toggle && <p>{desc}</p>}
    </article>
  )
}

export default Faq