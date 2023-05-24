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
/* Used just for testing purposes
useEffect( () => {
    async function station() {
    const response = await axios.get(
    `http://88.112.129.105:5000/Stations`);
    setStation(response.data); }
    station();
}, [])
{station.map((station) =>
        

                          <div className='formflex' >
                          <div className='formboxnumber' ><div className='slidetextright' >{station.DepartureStationId}</div></div>
                          <div className='formbox' ><div className='slidetextright'>{station.DepartureStationName} </div></div>
                          
                          
                            </div>
       
           
            )}
*/

return (
    <div>
        <h3>This project was done as pre-assignment for Solita Dev Academy Finland 2023. The data is owned by City Bike Finland.</h3>
        <h3>Database edited, all entries with longer duration than 3hours deleted. Shorter rides than 10m have been deleted.</h3>
        <h2>Use the links on topbar to browse through data.</h2>
        <h4 className='paddingTop'>Because of this project I decided to build a server computer at home. This project is now running on my brand new Ubuntu server. Be patient database is huge and server is slow.</h4>
        <div className='frontBottom'>
            <p>Created by Sampo Vuorento, link to project Github page https://github.com/sampotv/hslbike</p>
            <p>Original pre-assignment Github https://github.com/solita/dev-academy-2023-exercise</p>
        </div>
    </div>
)
}