import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function front() {

    const [ station, setStation] = useState([]);

    /* just used for testing the database connection
const [ test, setTest ] = useState([]);
useEffect( () => {
    async function duration() {
    const response = await axios.get(
    `http://localhost:5000/Duration`);
    setTest(response.data); }
    duration();
}, [])
*/

//get all the stations with the station id
useEffect( () => {
    async function station() {
    const response = await axios.get(
    `http://localhost:5000/Stations`);
    setStation(response.data); }
    station();
}, [])


return (
    <div>
        <h1>Test text</h1>
        <div className='formflex' >
        <div className='slidetextright2'><h3>id</h3></div>
        <div className='slidetextright2'><h3>Station name</h3></div></div>
        {station.map((station) =>
            <div className='formflex' >
            <div className='formboxnumber' ><div className='slidetextright' >{station.DepartureStationId}</div></div>
            <div className='formbox' ><div className='slidetextright'>{station.DepartureStationName} </div></div>
                          
                          
            </div>
       
           
        )}
    </div>
)
}