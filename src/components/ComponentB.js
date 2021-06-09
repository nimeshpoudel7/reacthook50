import React from 'react'
import ComponentC from './ComponentC'
import {hey,colorContext} from '../App'

const ComponentB = () => {
    return (
        <div>
            <div>I am B</div>
           
            <hey.Consumer>
                {name=>{
                    return( <colorContext.Consumer>
                        {color=>(
                             <div>
                                name:{name} color:{color}
                            </div>
                        )}
                    </colorContext.Consumer>)
                }}
            </hey.Consumer>
            <ComponentC/>
        </div>
    )
}

export default ComponentB
