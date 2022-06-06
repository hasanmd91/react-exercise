import React, { useState } from 'react'
import Component2 from './Component2'
import { userContext } from './UserContext'

const Component1 = () => {
  const [user, setUser] = useState({id:1, Name:"Hasan md abul"})
  const [ text, setText] = useState("hellow how are my name is hasan")
  return (
    <div>

      <userContext.Provider value={{user, text}}>
        <Component2  />
      </userContext.Provider>
      

    </div>
  )
}

export default Component1