import React from 'react'

function Input({handleChange}) {
  return (
    <input type="text" onChange={handleChange} placeholder='filtrar productos'/>
  )
}

export default Input
