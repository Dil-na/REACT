import React, { useState } from 'react'

const Crud = () => {
    const [name,setName] = useState('')
    const [rno,setRno] = useState('')
    const [students,setStudents] = useState([])
    console.log(students);

    const handleNameChange =(e)=>{
        setName(e.target.value)
    }
    const handleRnoChange =(e)=>{
        setRno(e.target.value)
    }
    const handleSubmit =(e)=> {
        e.preventDefault()
        setStudents([...students,{name,rno}])
        setName('')
        setRno('')
    }
    const handleDelete = (index)=>{
      setStudents(students.filter((student,ind)=>index!=ind))
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={handleNameChange}/>
        </div> <br/>
        <div className="flex justify-between items-center">
            <label htmlFor="">Rno</label>
            <input type="text" value={rno} onChange={handleRnoChange}/>
        </div>
        <button>Submit</button>
      </form>
      {students.map((student,index)=>(
        <div>
            <h1>Name:{student.name}</h1>
            <h1>Rno:{student.rno}</h1>
            <button onClick={()=>handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Crud
