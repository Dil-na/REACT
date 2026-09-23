import React from 'react'

const Child = (props) => {
  return (
    <div>
      Name is : {props.Student.name} <br />
      Age is : {props.Student.age} <br />
      Email is : {props.Student.email}
    </div>
  )
}

export default Child
