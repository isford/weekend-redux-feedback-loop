import React from 'react'

export default function Feeling() {
    return (
        <div>
            <h1>How are you feeling today?</h1>

            <h5>Feeling?</h5>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button>Next</button>
        </div>
    )
}
