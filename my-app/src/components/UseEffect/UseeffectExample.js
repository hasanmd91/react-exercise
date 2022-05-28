import React, { useEffect, useState } from 'react'

const UseeffectExample = () => {

  const [count, setCount] = useState(0);
  const[ isLoading, setisLoading] = useState(false)

  useEffect ( () => {
    console.log("useeffect");
  },[count,isLoading]) // calls with first render and depend on count which is state 


  return (
    <div> 
    {console.log("rendering")}
    <h1> count: {count} </h1>
    <button onClick={()=> setCount(count => count + 1)}>+</button>
    <button onClick={ ()=> setisLoading(!isLoading)}> isLoading</button>

    </div>
  )
}

export default UseeffectExample