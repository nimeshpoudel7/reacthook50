import React,{useState} from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const nim=(event)=>{
        setName(event.target.value)
    }
    const submitHandler=(event)=>{
        event.preventDefault()
        alert(`Hello ${name} is your email ${email}`)
        setName('')
        setEmail('')
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div><label>Name</label>
                    <input value={name} onChange={nim}></input>
                    
                </div>
                <div><label>Email</label>
                    <input value={email} onChange={event=>setEmail(event.target.value)}></input>
                </div>
                <div>
                    <button> Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form
