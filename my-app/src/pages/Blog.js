import React, { useEffect, useState } from 'react'


import { Data } from "./Blogsdata"
import { useParams, useNavigate } from 'react-router-dom'

const Blog = () => {
  const navigate = useNavigate()
  const {title} = useParams()
  const [bodyData, setbodyData] = useState("")

  useEffect( () => {
    const NewBodyData = Data.filter((blog)=> { return blog.title === title });
    setbodyData( NewBodyData[0].body)

  },[])

  return (
    <div>
      <h1> {title} </h1>
      <p>{bodyData} </p>
      <button onClick={()=>navigate("/blogs") }>Go to blogs </button>
    </div>
  )
}

export default Blog