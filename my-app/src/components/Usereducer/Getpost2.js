import React from 'react'

import { useEffect, useReducer  } from 'react'

const initialState = { 
    loading : true,
    error: "",
    post: {}
}

const reducer = (state, action)=> {
    switch(action.type ){
      case "SUCCESS":
        return {
          loading: false,
          error: "",
          post: action.result

        };
      case "ERROR":
        return{
          loading: false,
          error: "there was a problem fetching ",
          post: {}

        };
      default: 
        return state

    }
}

const Getpost2 = () => {
  const[state, dispatch ] =useReducer ( reducer, initialState);

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/todos/1').
    then((res)=> res.json()).
    then((data)=>{
       dispatch({ type: "SUCCESS", result : data})
    }).catch( ()=>{
        dispatch( { type: "ERROR"})

    })

  },[]);

  return (
    <div>
      { state.loading ? "loading..." : state.post.title}
      {state.error? state.error : null}
    </div>
  )
}

export default Getpost2