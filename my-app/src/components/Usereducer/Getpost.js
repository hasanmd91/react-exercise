import React from 'react'
import { useEffect, useState } from 'react'

const Getpost = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [post , setPost ] = useState({})


    useEffect( ( )=> { 
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data =>{
            setLoading(false);
            setPost(data);
            setError("")
        }).catch(()=>{
            setLoading(false);
            setPost({});
            setError("there was a problem ");
        })


    }, [])

  return (
    <div>
        
        { loading ? "loading ": post.title}
        { error ? error :null}

    </div>
  )
}

export default Getpost