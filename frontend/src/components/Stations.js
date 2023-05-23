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
    `http://88.112.129.105:5000/Duration`);
    setTest(response.data); }
    duration();
}, [])
*/

//Function to get all the stations with the station id
useEffect( () => {
    async function station() {
    const response = await axios.get(
    `http://88.112.129.105:5000/Stations`);
    setStation(response.data); }
    station();
}, [])


return (
    <div>
        <h1>Test text</h1>
        <div className='formflex' >
        <div className='slidetextright2'><h3>id</h3></div>
        <div className='slidetextright2'><h3>Station name</h3></div>
        <div className='slidetextright3'><h3>Station address</h3></div></div>
        {station.map((station) =>
            <div className='formflex' >
            <div className='formboxnumber' ><div className='slidetextright' >{station.ID}</div></div>
            <div className='formbox' ><div className='slidetextright'>{station.Nimi} </div></div>
            <div className='formbox' ><div className='slidetextright'>{station.Osoite} </div></div>              
                          
            </div>
           
        )}
        <div className='paddingDown'></div>
    </div>
)
}