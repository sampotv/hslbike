import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function front() {

    const [ station, setStation] = useState([]);

useEffect( () => {
    async function station() {
    const response = await axios.get(
    `http://localhost:5000/Statdis`);
    setStation(response.data); }
    station();
}, [])


return (
    <div>
        <h1>Test text</h1>
        {station.map((station) =>
        

                          <div className='formflex' >
                          <div className='formboxnumber' ><div className='slidetextright' >{station.DepartureStationId}</div></div>
                          <div className='formbox' ><div className='slidetextright'>{station.DepartureStationName} </div></div>
                          <div className='formbox' ><div className='slidetextright'>{station.CoveredDistance} </div></div>
                          
                            </div>
       
           
            )}
    </div>
)
}