import React from 'react'
import faker from 'faker'
const Contact = (props) => {
    // console.log("contact ", props)
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    return (
        <div>
                <div className="center"><h4>Contact</h4></div>
            <p>{`${faker.lorem.paragraph()}`}</p>
            hey
        </div>
    )
}

export default Contact
