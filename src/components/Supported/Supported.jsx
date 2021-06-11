import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Supported() {

    let history = useHistory();

    const handleClick = () => {
        console.log(`You're going to the next page`)
        //change location
        history.push('/comments')
    }

    return (
        <div>
            <h1>How supported are you feeling today?</h1>

            <h5>Supported?</h5>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button onClick={handleClick}>Next</button>
        </div>
        
    )
}
