import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { Data } from './Blogsdata';

const Blogs = () => {
const [blogsData, setBlogsData] = useState(Data)

const truncateString = (str, num ) => {
  if(str.length > num){
    return str.slice(0,num) + "..."
  } else { return str}
}

  return (
    <div> 
      <h1>Blogs</h1>
      
      <section>
        {blogsData.map( (blog) => {

          const {id, title, body} = blog

          return <article key={id}> 
            <h3> {title} </h3>
            <p> {truncateString( body, 100)}</p>
            <Link to={title} state={{id, title, body}}> Learn more </Link>
          </article>

         
        })}
      </section>





    </div>
  )
}

export default Blogs