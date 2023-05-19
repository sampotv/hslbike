import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function front() {

    const [ distance, setDistance] = useState([]);
    const [ duration, setDuration] = useState([]);
    const [ departure05, setDeparture05] = useState([]);
    const [ returnstation05, setReturnstation05] = useState([]);
    const [ departure06, setDeparture06] = useState([]);
    const [ returnstation06, setReturnstation06] = useState([]);

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

//Function to get top 10 stations with most bike departures from 2021 05
useEffect( () => {
    async function departure05() {
    const response = await axios.get(
    `http://localhost:5000/MostDeparture10_05`);
    setDeparture05(response.data); }
    departure05();
}, [])

//Function to get top 10 stations with most bike returns from 2021 05
useEffect( () => {
    async function returnstation05() {
    const response = await axios.get(
    `http://localhost:5000/MostReturn10_05`);
    setReturnstation05(response.data); }
    returnstation05();
}, [])
//Function to get top 10 stations with most bike departures from 2021 06
useEffect( () => {
    async function departure06() {
    const response = await axios.get(
    `http://localhost:5000/MostDeparture10_06`);
    setDeparture06(response.data); }
    departure06();
}, [])

//Function to get top 10 stations with most bike returns from 2021 06
useEffect( () => {
    async function returnstation06() {
    const response = await axios.get(
    `http://localhost:5000/MostReturn10_06`);
    setReturnstation06(response.data); }
    returnstation06();
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
        <div className='column' ><div className='moststationtopic' >Top 10 most bikes departured stations 05-2021</div>
        {departure05.map((departure) =>       
                <div className='formflex' >
                <div className='moststationwidth' >
                    {departure.DepartureStationName}</div>
                <div className='' ><div className='slidetextright' >
                    {departure.Occurrence}</div></div>                                      
                </div>          
        )}
        </div> 
        <div className='column' ><div className='moststationtopic' >Top 10 most bikes returned stations 05-2021</div>
        {returnstation05.map((returnstation) =>       
                <div className='formflex' >
                <div className='moststationwidth' >
                    {returnstation.ReturnStationName}</div>
                <div className='' ><div className='slidetextright' >
                    {returnstation.Occurrence}</div></div>                                    
                </div>          
        )}
        </div>
        </div>
        <div className='row' >
        <div className='column' ><div className='moststationtopic' >Top 10 most bikes departured stations 06-2021</div>
        {departure06.map((departure06) =>       
                <div className='formflex' >
                <div className='moststationwidth' >
                    {departure06.DepartureStationName}</div>
                <div className='' ><div className='slidetextright' >
                    {departure06.Occurrence}</div></div>                                      
                </div>          
        )}
        </div> 
        <div className='column' ><div className='moststationtopic' >Top 10 most bikes returned stations 06-2021</div>
        {returnstation06.map((returnstation06) =>       
                <div className='formflex' >
                <div className='moststationwidth' >
                    {returnstation06.ReturnStationName}</div>
                <div className='' ><div className='slidetextright' >
                    {returnstation06.Occurrence}</div></div>                                    
                </div>          
        )}
        </div>
        </div>
        <Link to="/Allrides">Click here to see all rides from and to stations</Link> 
    </div>
)
}