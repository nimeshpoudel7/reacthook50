import React from 'react'
import faker from 'faker'
const Home = () => {
    return (
        <div>
             <div className="center"><h4>Home</h4></div>
            <p>{`${faker.lorem.paragraph()}`}</p>  
        </div>
    )
}

export default Home
