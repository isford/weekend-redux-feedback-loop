import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Comments() {

    let history = useHistory();

    const handleClick = () => {
        console.log(`You're going to the next page`)
        //change location
        history.push('/review')
    }

    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <h5>Comments?</h5>
            <input type = "text" placeholder = "Comments"/>
            <button onClick={handleClick}>Next</button>
        </div>
    )
}
