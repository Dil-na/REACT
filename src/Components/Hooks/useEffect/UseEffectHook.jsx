import React from 'react'

const UseEffectHook = () => {
    useEffect(()=>{
        console.log("componet mounting");
    },[])
  return (
    <div>
      UseEffectHook
    </div>
  )
}

export default UseEffectHook
