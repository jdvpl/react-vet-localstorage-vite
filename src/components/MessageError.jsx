import React from 'react'

const MessageError = ({children}) => {
  return (
    <div className="p-3 mt-3 rounded-md bg-red-800 uppercase font-bold text-white text-center">{children}</div>
  )
}

export default MessageError