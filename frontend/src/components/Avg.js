import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function front() {

    const [ distance, setDistance] = useState([]);
    const [ duration, setDuration] = useState([]);

useEffect( () => {
    async function distance() {
    const response = await axios.get(
    `http://localhost:5000/AverageDistance`);
    setDistance(response.data); }
    distance();
}, [])

useEffect( () => {
    async function duration() {
    const response = await axios.get(
    `http://localhost:5000/AverageDuration`);
    setDuration(response.data); }
    duration();
}, [])


return (
    <div>
        <h1>Test text</h1>
        {distance.map((distance) =>
        

                <div className='formflex' ><div className='formflex'> Average distance of a ride </div>
                <div className='formboxnumber' ><div className='slidetextright' >{distance.AverageDistance}</div></div ><div className='slidetextright'> meters</div>
                        
                </div>
        )}
        {duration.map((duration) =>
        
                <div className='formflex' ><div className='formflex'>Average duration of a ride </div>
                <div className='formboxnumber' ><div className='slidetextright' >{duration.AverageDuration}</div></div><div className='slidetextright'>seconds</div>
                                      
                </div>
       
           
        )}
    </div>
)
}