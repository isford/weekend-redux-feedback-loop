import React from 'react';
import {useSelector} from 'react-redux';


export default function Review() {
    const surveyList = useSelector(store => store.surveyList);

    return (
        <div>
            <p>STUFF TO REVIEW</p>
            <ul>
                {surveyList.map((response, index) =>
                <li key = {index}>{response.feeling}</li>
                )}
            </ul>
            <button>SUBMIT IT</button>
        </div>
    );
   
}
