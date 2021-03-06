import React from 'react'

import { useReducer } from 'react'

const Usereducerwithobject = () => {

const initialState = {
    counter : 0,
};

const reducer = (state, action) => { 
    switch(action.type){
        case "increment":
            return {counter: state.counter + action.value};
        case "decrement":
            return {counter: state.counter - action.value};
        default: 
            return state;

    }
}

const[ count, dispatch ]=useReducer(reducer, initialState);

  return (
    <div> 
        <div> count: {count.counter} </div>
        <button type='button' onClick={()=>dispatch({type : "increment", value: 1})} >Increment </button>
        <button type='button' onClick={()=>dispatch({type: "decrement", value: 1})}>Decrement </button> <br/>
        <button type='button' onClick={()=>dispatch({type : "increment", value: 5})} >Increment by 5  </button>
        <button type='button' onClick={()=>dispatch({type: "decrement", value: 5})}>Decrement by 5 </button>
    </div>
  )
}

export default Usereducerwithobject