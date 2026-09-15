import React from 'react'
import { useNavigate } from 'react-router-dom'
const UseNavigateComp = () => {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/home')
    }
    return (
        <div>
            <button onClick={goToHome}>Go to Home</button>
        </div>
    )
}

export default UseNavigateComp;