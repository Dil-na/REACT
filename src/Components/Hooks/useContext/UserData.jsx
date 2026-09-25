import React,{ useContext } from 'react'
import UserContext from './context/UserContext'

const UserData = () => {
  const user = useContext(UserContext)
  return (
    <div>
      {user.name}<br/>
      {user.email}
    </div>
  )
}

export default UserData
