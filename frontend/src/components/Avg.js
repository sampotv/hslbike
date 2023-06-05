import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function front() {

    const [ distance05, setDistance05] = useState([]);
    const [ duration05, setDuration05] = useState([]);
    const [ distance06, setDistance06] = useState([]);
    const [ duration06, setDuration06] = useState([]);
    const [ distance07, setDistance07] = useState([]);
    const [ duration07, setDuration07] = useState([]);

//Function to get average distance that bike travels per each rental
useEffect( () => {
    async function distance05() {
    const response = await axios.get(
    `http://localhost:5000/AverageDistance05`);
    setDistance05(response.data); }
    distance05();
}, [])

//Function to get average time of each bike rental
useEffect( () => {
    async function duration05() {
    const response = await axios.get(
    `http://localhost:5000/AverageDuration05`);
    setDuration05(response.data); }
    duration05();
}, [])
//Function to get average distance that bike travels per each rental
useEffect( () => {
    async function distance06() {
    const response = await axios.get(
    `http://localhost:5000/AverageDistance06`);
    setDistance06(response.data); }
    distance06();
}, [])

//Function to get average time of each bike rental
useEffect( () => {
    async function duration06() {
    const response = await axios.get(
    `http://localhost:5000/AverageDuration06`);
    setDuration06(response.data); }
    duration06();
}, [])
//Function to get average distance that bike travels per each rental
useEffect( () => {
    async function distance07() {
    const response = await axios.get(
    `http://localhost:5000/AverageDistance07`);
    setDistance07(response.data); }
    distance07();
}, [])

//Function to get average time of each bike rental
useEffect( () => {
    async function duration07() {
    const response = await axios.get(
    `http://localhost:5000/AverageDuration07`);
    setDuration07(response.data); }
    duration07();
}, [])

return (
    <div>
       <div className='row' >
        <div className='column' ><div className='moststationtopic' >Average values from 05-2021</div>
        {distance05.map((distance05) =>
                <div className='formflex' ><div className='formflex'> Average distance of a ride </div>
                <div className='formboxnumber' ><div className='slidetextright' >
                    {distance05.AverageDistance}</div></div ><div className='slidetextright'> kilometers</div>                        
                </div>
        )}
        {duration05.map((duration05) =>       
                <div className='formflex' ><div className='formflex'>Average duration of a ride </div>
                <div className='formboxnumber' ><div className='slidetextright' >
                    {duration05.AverageDuration}</div></div><div className='slidetextright'>minutes</div>                                      
                </div>          
        )}
        </div>
        </div>
        <div className='row' >
        <div className='column' ><div className='moststationtopic' >Average values from 06-2021</div>
        {distance06.map((distance06) =>
                <div className='formflex' ><div className='formflex'> Average distance of a ride </div>
                <div className='formboxnumber' ><div className='slidetextright' >
                    {distance06.AverageDistance}</div></div ><div className='slidetextright'> kilometers</div>                        
                </div>
        )}
        {duration06.map((duration06) =>       
                <div className='formflex' ><div className='formflex'>Average duration of a ride </div>
                <div className='formboxnumber' ><div className='slidetextright' >
                    {duration06.AverageDuration}</div></div><div className='slidetextright'>seconds</div>                                      
                </div>          
        )}
        </div>
        </div>
        <div className='row' >
        <div className='column' ><div className='moststationtopic' >Average values from 07-2021</div>
        {distance07.map((distance07) =>
                <div className='formflex' ><div className='formflex'> Average distance of a ride </div>
                <div className='formboxnumber' ><div className='slidetextright' >
                    {distance07.AverageDistance}</div></div ><div className='slidetextright'> kilometers</div>                        
                </div>
        )}
        {duration07.map((duration07) =>       
                <div className='formflex' ><div className='formflex'>Average duration of a ride </div>
                <div className='formboxnumber' ><div className='slidetextright' >
                    {duration07.AverageDuration}</div></div><div className='slidetextright'>seconds</div>                                      
                </div>          
        )}
        </div>
        </div>
    </div>
)
}