import React from 'react'
import {hey,colorContext} from '../App'
const ComponentC = () => {
    return (
        <div>
            <div>i am c</div>
            
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
           
        </div>
    )
}

export default ComponentC
