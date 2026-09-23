import React from 'react'

const UseEffectCount = () => {
    const [count,setCount] = useState(0)

    useEffect(()=>{
        console.log(count);
    },[count])
  return (
    <div>
      count : {count}
    <button onClick={()=>setCount(count+1)}>Add</button>
    </div>
  )
}

export default UseEffectCount
