import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function front() {

    const [ station, setStation] = useState([]);
    const [ search, setSearch] = useState('');
    /* just used for testing the database connection
const [ test, setTest ] = useState([]);
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

//Search function to create searchbox for station name
const filter = (e) => {
  const key = e.target.value; 
  setSearch(key);
};
let searchStations = station.filter(stations => stations.Nimi.toLowerCase().includes(search.toLowerCase()))

return (
    <div>
        <div className='formflex'>        
        
        <input
          type="search"
          value={search}
          onChange={filter}
          className=""
          placeholder="Search with station name"/></div>
        <div className='formflex' >
        <div className='slidetextright2'><h3>id</h3></div>
        <div className='slidetextright2'><h3>Station name</h3></div>
        <div className='slidetextright3'><h3>Station address</h3></div></div>
        {searchStations.length ? searchStations.map((station) => (
        
            <div className='formflex' >
            <div className='formboxnumber' ><div className='slidetextright' >{station.ID}</div></div>
            <div className='formbox' ><div className='slidetextright'>{station.Nimi} </div></div>
            <div className='formbox' ><div className='slidetextright'>{station.Osoite} </div></div>              
            <div><Link to={`/Stations/${station.ID}`}><button className='' >Open station info</button></Link></div>   
            </div>
            )) : <div>No results, try other keyword</div> }
        
        <div className='paddingDown'></div>
    </div>
)
}
