import React from 'react'
import faker from 'faker'
const About = () => {
    return (
        <div className="container">
            <div className="center"><h4>About</h4></div>
            <p>{`${faker.lorem.paragraph()}`}</p>
            hey
        </div>
    )
}

export default About
