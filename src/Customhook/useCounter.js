import React,{useState} from 'react'


const useCounter = (initialValue=0,value=5) => {
    const [Count, setCount] = useState(initialValue)
    const increment =()=>{
        setCount(Count+value)
    }
    const decrement =()=>{
        setCount(Count-value)
    }
    const reset =()=>{
        setCount(initialValue)
    }
    return [Count,increment,decrement,reset]
}

export default useCounter
