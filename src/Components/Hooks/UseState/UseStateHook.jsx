import React, { useState } from 'react'

const UseStateHook = () => {
    const [count,setCount] = useState (0)
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count} </p>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
      <button onClick={()=>setCount(count -1)}>Decrement</button>
      <button onClick={()=>setCount(useState)}>Reset</button>
    </div>
  )
}

export default UseStateHook

