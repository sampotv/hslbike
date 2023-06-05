import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function topdays() {

    const [ days05, setDays05 ] = useState([]);
    const [ days06, setDays06 ] = useState([]);
    const [ days07, setDays07 ] = useState([]);

//Function to get the busiest rental days of the month 05
useEffect( () => {
    async function days05() {
    const response = await axios.get(
    `http://localhost:5000/top10day05`);
    setDays05(response.data); }
    days05();
}, [])
//Function to get the busiest rental days of the month 06
useEffect( () => {
    async function days06() {
    const response = await axios.get(
    `http://localhost:5000/top10day06`);
    setDays06(response.data); }
    days06();
}, [])
//Function to get the busiest rental days of the month 07
useEffect( () => {
    async function days07() {
    const response = await axios.get(
    `http://localhost:5000/top10day07`);
    setDays07(response.data); }
    days07();
}, [])

return (
    <div>
        <h2>The busiest days of the month</h2>
        
        <div className='row' >
        <div className='column' ><div className='moststationtopic' >Top 10 busiest rental days of 05-2021</div>
        {days05.map((days05) =>       
                <div className='formflex' >
                <div className='moststationwidth' >
                    {days05.cnt}</div>
                <div className='' ><div className='slidetextright' >
                    {days05.Departure_date}</div></div>                                      
                </div>          
        )}
        </div> 
        <div className='column' ><div className='moststationtopic' >Top 10 busiest rental days of 05-2021</div>
        {days06.map((day06) =>       
                <div className='formflex' >
                <div className='moststationwidth' >
                    {day06.cnt}</div>
                <div className='' ><div className='slidetextright' >
                    {day06.Departure_date}</div></div>                                    
                </div>          
        )}
        </div>
        </div>
        <div className='row' >
        <div className='column' ><div className='moststationtopic' >Top 10 busiest rental days of 06-2021</div>
        {days07.map((day07) =>       
                <div className='formflex' >
                <div className='moststationwidth' >
                    {day07.cnt}</div>
                <div className='' ><div className='slidetextright' >
                    {day07.Departure_date}</div></div>                                      
                </div>          
        )}
        </div>        
        </div>
    </div>

    
)
}