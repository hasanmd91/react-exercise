import React from 'react'

import { useReducer } from 'react';

const initialState = 5;
const reducer = (state, action)=>{
    switch(action){
        case "increment":
            return state +1;
        case "decremnt" :
            return state -1;
        default:
            return state ;

    }
   
}

const Counter = () => {

const[count, dispatch] = useReducer( reducer, initialState)

  return (
    <div>
    <div> count : {count} </div>
    <button type="button " onClick={()=>{dispatch("increment")}}> increment</button>
    <button type="button" onClick={()=>{dispatch("decremnt")}}> decrement</button>

    </div>
  )
}

export default Counter