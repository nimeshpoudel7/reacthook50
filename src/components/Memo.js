import React,{useEffect} from 'react'
let ComponentCounter=1
const Memo = (props) => {
    useEffect(() => {
        ComponentCounter++
    })
    
    return (
        <div>
            <h1>
            ComponentA : render{ComponentCounter} and Counter value={props.count}
            </h1>
        </div>
    )
}
export default Memo
