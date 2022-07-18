import React, { useReducer } from "react";

const Counterappobject = () => {
  const initialstate = {
    counter: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { counter: state.counter + action.value };
      case "decrement":
        return { counter: state.counter - action.value };
      default:
        return { counter: state.counter };
    }
  };

  const [count, dispatch] = useReducer(reducer, initialstate);

  return (
    <div>
      <h1>count: {count.counter}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 4 })}>
        {" "}
        + incremnet{" "}
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 4 })}>
        {" "}
        - decrement{" "}
      </button>
    </div>
  );
};

export default Counterappobject;
