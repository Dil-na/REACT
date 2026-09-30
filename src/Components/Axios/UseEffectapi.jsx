import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffectApi = () => {
    const [state, setState] = useState([])
    console.log(state, "statee..............");
    const fetchUsers = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users",
            );
            console.log(response);
            // const data = await response.json();
            // console.log(data);
            setState(response.data)
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchUsers();
    }, [])
  return (
    <div>
      {state.map(users=>(
        <ul>
            <li>{users.name} </li>
        </ul>
      ))}
    </div>
  )
}

export default UseEffectApi
