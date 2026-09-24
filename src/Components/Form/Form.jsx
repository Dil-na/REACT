import React, { useState } from 'react'

const Form = () => {
    const [name,setName] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name);
    }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input type ="text" value={name} onChange={(e)=>setName(e.target.value)}/> <br/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
