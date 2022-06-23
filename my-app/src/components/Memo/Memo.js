import React, { useState } from 'react'
import Message from './Message';

const Memo  = () => {

  const [ count, setcount]= useState(0);

    console.log("count rendering ")

  return (
    <div> 
      <p> count: {count}</p>
      <button onClick={()=> setcount((count) => count +1) }> increment + </button>
      <Message  numberofmessage={count} />
    </div>
  )
}

export default Memo