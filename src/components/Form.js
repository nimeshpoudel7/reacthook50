import React from 'react'
import useInput from '../Customhook/useInput'

const Form = () => {
    const [name, bindName, clearName] = useInput()
    const [email, bindEmail, clearEmail] =useInput()

    const submitHandler=(event)=>{
        event.preventDefault()
        alert(`Hello ${name} is your email ${email}`)
        clearName()
        clearEmail()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div><label>Name</label>
                    <input {...bindName}></input>
                    
                </div>
                <div><label>Email</label>
                    <input {...bindEmail}></input>
                </div>
                <div>
                    <button> Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form
