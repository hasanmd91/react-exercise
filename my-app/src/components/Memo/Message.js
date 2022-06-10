import React, { memo } from 'react'

const Message = ({numberofmessage}) => {
  console.log("message rendering")
  return (
    <div>
      <p> count: {numberofmessage}
      </p>
      </div>
  )
}

export default memo(Message)