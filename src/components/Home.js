import React,{useEffect,useState} from 'react'
import  '../App.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
const Home = (props) => {
    const [post, setPost] = useState([])
    useEffect(() => {  
        (async()=>{
            const response =await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            setPost(response.data.slice(0,5))
        })()
       
    },[])
    console.log('prosp',props)
    const listmarkup=post.length>0?(
    post.map(details=>(
                <div className="card shadow p-3 mb-5 bg-white rounded" key={details.id}>
        <div className="card-body">
            <Link to={`/posts/${details.id}`}>
            <h5 className="card-title">{details.title}</h5>
            </Link>
            <p className="card-text">{details.body}</p>

        </div>
        </div>
    ))
    
    ):(null)

    return (
        <div>
             <div className="center"><h4>Home</h4></div>
             {listmarkup}
             
        </div>
    )
}

export default Home
