import React from 'react'
import ComponentC from './ComponentC'
import {hey} from '../App'
const ComponentB = () => {
    return (
        <div>
            <div>I am B</div>
           
            <hey.Consumer>
                {name=>{
                    return <div>{name}</div>
                }}
            </hey.Consumer>
            <ComponentC/>
        </div>
    )
}

export default ComponentB
