import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function front() {

    const [ distance, setDistance] = useState([]);
    const [ duration, setDuration] = useState([]);
    const [ departure, setDeparture] = useState([]);
    const [ returnstation, setReturnstation] = useState([]);

//Function to get average distance that bike travels per each rental
useEffect( () => {
    async function distance() {
    const response = await axios.get(
    `http://localhost:5000/AverageDistance`);
    setDistance(response.data); }
    distance();
}, [])

//Function to get average time of each bike rental
useEffect( () => {
    async function duration() {
    const response = await axios.get(
    `http://localhost:5000/AverageDuration`);
    setDuration(response.data); }
    duration();
}, [])

//Function to get top 10 stations with most bike departures
useEffect( () => {
    async function departure() {
    const response = await axios.get(
    `http://localhost:5000/MostDeparture10`);
    setDeparture(response.data); }
    departure();
}, [])

//Function to get top 10 stations with most bike returns
useEffect( () => {
    async function returnstation() {
    const response = await axios.get(
    `http://localhost:5000/MostReturn10`);
    setReturnstation(response.data); }
    returnstation();
}, [])


return (
    <div>
        <h1>Test text</h1>
        {distance.map((distance) =>
                <div className='formflex' ><div className='formflex'> Average distance of a ride </div>
                <div className='formboxnumber' ><div className='slidetextright' >
                    {distance.AverageDistance}</div></div ><div className='slidetextright'> meters</div>                        
                </div>
        )}
        {duration.map((duration) =>       
                <div className='formflex' ><div className='formflex'>Average duration of a ride </div>
                <div className='formboxnumber' ><div className='slidetextright' >
                    {duration.AverageDuration}</div></div><div className='slidetextright'>seconds</div>                                      
                </div>          
        )}
        <div className='row' >
        <div className='column' ><div className='moststationtopic' >Top 10 most bikes departured stations</div>
        {departure.map((departure) =>       
                <div className='formflex' >
                <div className='moststationwidth' >
                    {departure.DepartureStationName}</div>
                <div className='' ><div className='slidetextright' >
                    {departure.Occurrence}</div></div>                                      
                </div>          
        )}
        </div> 
        <div className='column' ><div className='moststationtopic' >Top 10 most bikes returned stations</div>
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
        <Link to="/Allrides">Click here to see all rides from and to stations</Link> 
    </div>
)
}