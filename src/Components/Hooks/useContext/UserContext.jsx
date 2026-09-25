import { createContext } from 'react';

const UserContext = createContext () 

export default UserContext

export const UserProvider = ({children})=> {
  const user ={
    name:"anu",
    email:"anu@gmail.com"
  }
  return (
   <UserContext.Provider value={user}>
    {children}
   </UserContext.Provider>
  )
}

