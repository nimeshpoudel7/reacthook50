import React from 'react'
import faker from 'faker'
const Contact = () => {
    return (
        <div>
                <div className="center"><h4>Contact</h4></div>
            <p>{`${faker.lorem.paragraph()}`}</p>
            hey
        </div>
    )
}

export default Contact
