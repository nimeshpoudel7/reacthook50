import React,{useContext} from 'react'
import ComponentC from './ComponentC'
import {hey,colorContext} from '../App'
const ComponentB = () => {
    const Name = useContext(hey)
    const Color = useContext(colorContext)
    return (
        <div>
            <div>I am B</div>
            <div>Name from B: {Name}</div>
            <div>Color from B: {Color}</div>
            <ComponentC/>
        </div>
    )
}

export default ComponentB
