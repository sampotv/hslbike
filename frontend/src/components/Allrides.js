//page that shows all rides from stations, departure and returns
import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function front() {

    const [ departure, setDeparture] = useState([]);
    const [ returnstation, setReturnstation] = useState([]);

//Function to get top 10 stations with most bike departures
useEffect( () => {
    async function departure() {
    const response = await axios.get(
    `http://localhost:5000/MostDepartureAll`);
    setDeparture(response.data); }
    departure();
}, [])

//Function to get top 10 stations with most bike returns
useEffect( () => {
    async function returnstation() {
    const response = await axios.get(
    `http://localhost:5000/MostReturnAll`);
    setReturnstation(response.data); }
    returnstation();
}, [])


return (
    <div>
        <h1>All rides from and to bike stations combined</h1>

        <div className='row' >
        <div className='column' ><div className='moststationtopic' >All rides departured stations</div>
        {departure.map((departure) =>       
                <div className='formflex' >
                <div className='moststationwidth' >
                    {departure.DepartureStationName}</div>
                <div className='' ><div className='slidetextright' >
                    {departure.Occurrence}</div></div>                                      
                </div>          
        )}
        </div> 
        <div className='column' ><div className='moststationtopic' >All rides returned stations</div>
        {returnstation.map((returnstation) =>       
                <div className='formflex' >
                <div className='moststationwidth' >
                    {returnstation.ReturnStationName}</div>
                <div className='' ><div className='slidetextright' >
                    {returnstation.Occurrence}</div></div>                                    
                </div>          
        )}
        </div>
        </div>
    </div>
)
}