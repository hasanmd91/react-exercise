import React from 'react'

import { useParams, useNavigate, useLocation} from 'react-router-dom'

const Blog = () => {
  const navigate = useNavigate();
  // const {title} = useParams();
  const location = useLocation();

  // const [bodyData, setbodyData] = useState("");

  // useEffect( () => {
  //   const NewBodyData = Data.filter((blog)=> { return blog.title === title });
  //   setbodyData( NewBodyData[0].body)

  // },[])

  return (
    <div>
      <h1> {location.state.title} </h1>
      <p>{location.state.body} </p>
      <button onClick={()=>navigate("/blogs") }>Go to blogs </button>
    </div>
  )
}

export default Blog