import React, { useEffect, useState } from 'react'

const loadingtext = <p> todos is loading </p>

const Datafetch = () => {

    const [ todos, setTodos ] = useState(null)
    const [ isLoading, setIsloading ] = useState(true)
    const [ error, seterror ] = useState(null)


    useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                if(!res.ok){throw Error ("fetching is not successful")
            } else{
                return res.json()
            } 
            })
            .then((data) => { 
                setTodos(data);
                setIsloading(false);
                seterror(null);
            })
            .catch((error) => {   
                seterror(error.message)
                setIsloading(false);
            })
      
    },[]);

    const todosElement = todos && todos.map((todo)=>{ 
        return<p key = {todo.title}> {todo.title}   </p>});

  return (
    <div>
        <h1>todos</h1>
        {error && <p> { error}</p> }
        {isLoading && loadingtext }
        {todosElement}
    </div>
  )
}

export default Datafetch