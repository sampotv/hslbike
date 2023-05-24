import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Top10station() {

    const [ departure05, setDeparture05] = useState([]);
    const [ returnstation05, setReturnstation05] = useState([]);
    const [ departure06, setDeparture06] = useState([]);
    const [ returnstation06, setReturnstation06] = useState([]);
    const [ departure07, setDeparture07] = useState([]);
    const [ returnstation07, setReturnstation07] = useState([]);



//Function to get top 10 stations with most bike departures from 2021 05
useEffect( () => {
    async function departure05() {
    const response = await axios.get(
    `http://88.112.129.105:5000/MostDeparture10_05`);
    setDeparture05(response.data); }
    departure05();
}, [])

//Function to get top 10 stations with most bike returns from 2021 05
useEffect( () => {
    async function returnstation05() {
    const response = await axios.get(
    `http://88.112.129.105:5000/MostReturn10_05`);
    setReturnstation05(response.data); }
    returnstation05();
}, [])
//Function to get top 10 stations with most bike departures from 2021 06
useEffect( () => {
    async function departure06() {
    const response = await axios.get(
    `http://88.112.129.105:5000/MostDeparture10_06`);
    setDeparture06(response.data); }
    departure06();
}, [])

//Function to get top 10 stations with most bike returns from 2021 06
useEffect( () => {
    async function returnstation06() {
    const response = await axios.get(
    `http://88.112.129.105:5000/MostReturn10_06`);
    setReturnstation06(response.data); }
    returnstation06();
}, [])
//Function to get top 10 stations with most bike departures from 2021 07
useEffect( () => {
    async function departure07() {
    const response = await axios.get(
    `http://88.112.129.105:5000/MostDeparture10_07`);
    setDeparture07(response.data); }
    departure07();
}, [])

//Function to get top 10 stations with most bike returns from 2021 07
useEffect( () => {
    async function returnstation07() {
    const response = await axios.get(
    `http://88.112.129.105:5000/MostReturn10_07`);
    setReturnstation07(response.data); }
    returnstation07();
}, [])

return (
    <div>
     
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
        <div className='row' >
        <div className='column' ><div className='moststationtopic' >Top 10 most bikes departured stations 07-2021</div>
        {departure07.map((departure07) =>       
                <div className='formflex' >
                <div className='moststationwidth' >
                    {departure07.DepartureStationName}</div>
                <div className='' ><div className='slidetextright' >
                    {departure07.Occurrence}</div></div>                                      
                </div>          
        )}
        </div> 
        <div className='column' ><div className='moststationtopic' >Top 10 most bikes returned stations 07-2021</div>
        {returnstation07.map((returnstation07) =>       
                <div className='formflex' >
                <div className='moststationwidth' >
                    {returnstation07.ReturnStationName}</div>
                <div className='' ><div className='slidetextright' >
                    {returnstation07.Occurrence}</div></div>                                    
                </div>          
        )}        
        </div>
        </div>
        <div className='paddingDown'><Link to="/Allrides">Click here to see all rides from and to stations</Link> </div>
    </div>
)
}