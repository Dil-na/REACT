import React, { useCallback , useMemo, useState } from 'react'
    const functionCounter = new Set()

const CallBackExample = () => {



    const [count1,setCount1] = useState (0);
    const [count2 ,setCount2] = useState (0);

    const increment =()=>{
        setCount1(count1+1)
    }
    const decrement =()=>{
        setCount2(count2-1)
    }
    const increment2 =()=>{
        setCount2(count2+1)
    }
    
    // const increment = useCallback(()=>{
    // setCount1(count1 +1)
    // },[count1])

    // const decrement = useCallback(()=>{
    // setCount1(count1 -1)
    // },[count1])

    // const increment2 = useCallback(()=>{
    // setCount2(count2 +1)
    // },[count2])

functionCounter.add(increment)
functionCounter.add(decrement)
functionCounter.add(increment2)
console.log(functionCounter)
  return (
    <div>
      first count: {count1} <br/>
      second count: {count2} <br/>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <br/><br/>
      <button onClick={increment2}>increment2</button>
    </div>
  )
}

export default CallBackExample
