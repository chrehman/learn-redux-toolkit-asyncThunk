import React from 'react'
import { useSelector } from 'react-redux'

const CounterDisplay = () => {
    const count=useSelector((state)=>{
        return state.count.count
    })
    return (
        <div>
            <h2>Counter Display:{count}</h2>
        </div>
    )
}

export default CounterDisplay