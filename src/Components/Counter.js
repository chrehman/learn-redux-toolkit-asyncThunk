import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterUpdate, decrement, decrementByAmount, increment, incrementByAmount } from '../store/counterSlice'

const Counter = () => {
    const {count,isLoading,error} = useSelector((state) => {
        console.log(state)
        return {
            count: state.count.count,
            isLoading: state.count.isLoading,
            error: state.count.error
        }
    })
    const dispatch = useDispatch()
    const [value, setValue] = useState(0)
    if(isLoading){
        return(
            <h1>Loading</h1>
        )
    }
    return (
        <div>
            <h1>Counter</h1>
            <h3>Count:{count}</h3>
            {/* <button onClick={()=>{dispatch({type:"Increment"})}}>Increment</button><br/>
            <button onClick={()=>{dispatch({type:"Decrement"})}}>Decrement</button><br/>
            <input type="text" onChange={(e)=>{setValue(e.target.value)}}/><br/>
            <button onClick={()=>{dispatch({type:"Increment_by_value",payload:Number(value)})}}>Increment By Value</button><br/>
            <button onClick={()=>{dispatch({type:"Decrement_by_value",payload:Number(value)})}}>Decrement By Value</button><br/>
             */}
            <button onClick={() => { dispatch(increment()) }}>Increment</button><br />
            <button onClick={() => { dispatch(decrement()) }}>Decrement</button><br />
            <input type="text" onChange={(e) => { setValue(e.target.value) }} /><br />
            <button onClick={() => { dispatch(incrementByAmount(Number(value))) }}>Increment By Value</button><br />
            <button onClick={() => { dispatch(decrementByAmount(Number(value))) }}>Decrement By Value</button><br />
            <button onClick={() => { dispatch(counterUpdate()) }}>Increment By Server</button><br />

        </div>
    )
}

export default Counter
