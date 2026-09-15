import React from 'react'
import { Link } from 'react-router-dom'

const LINKcomponent = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/test">Test</Link>
    </div>
  )
}

export default LINKcomponent
