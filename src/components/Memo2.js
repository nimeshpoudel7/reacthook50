import React,{useEffect} from 'react'
let ComponentCounter=1
const Memo2 = (props) => {
    useEffect(() => {
        ComponentCounter++
    })
    
    return (
        <div>
            <h1>
            ComponentB : render{ComponentCounter} and Counter value={props.counte}
            </h1>
        </div>
    )
}
export default Memo2
