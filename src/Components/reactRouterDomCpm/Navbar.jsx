import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav style={{border:"1px solid",padding:"20px"}}>
            <Link to={'/navbar'} style={{padding:"10px"}}>Home</Link>
            <Link to={'about'} style={{padding:"10px"}}>About</Link>
            <Link to={'CounterClass'} style={{padding:"10px"}}>Counter</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Navbar