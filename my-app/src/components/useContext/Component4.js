import React from 'react'
import { useContext } from 'react'
import { userContext } from './UserContext'



const Component4 = () => {
  const {user, text} = useContext(userContext);
  return (
    <div>
      <p> {user.id}     </p>
      <p> {user.Name}   </p>
      <p>{text}</p>
    </div>
  )
}

export default Component4