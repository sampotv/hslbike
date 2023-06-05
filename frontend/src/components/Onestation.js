import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Onestatio() {

    const [onestation, setOnestation] = useState([]);
    const {ID} = useParams();

/* Function to get information from one station
 * http://localhost:5000/Stations/1 works backend is fine
 * Something wrong with useParams, doesn't make calls
 * */
    /*
    useEffect( () => {
        async function station() {
        const response = await axios.get(
        `http://localhost:5000/Stations/${ID}`);
        setOnestation(response.data); }
        station();
    }, [])
    */
    useEffect( () => {
        async function statio() {
        const station = await fetch(`http://localhost:5000/Stations/${ID}`).then((res) =>
          res.json()
        )
        setOnestation(station) }
        statio()
      }, [ID]);
    return (
        <div className="">
            
            {onestation.map((station) =>
        

            <div className='formstation' ><h3>Station id={station.ID} information:</h3>
            <div className='onestationunderline'></div>
            <div className='formstation' ><div className='' >Station name: {station.Nimi}</div></div>
            <div className='formstation' ><div className=''>Station address: {station.Osoite} </div></div>
            <div className='formstation' ><div className=''>Station city: {station.Kaupunki} </div></div>
            <div className='formstation' ><div className=''>Bike capacity: {station.Kapasiteet} </div></div>
            </div>
            )}  
              
        </div>
    );
}

/*
{onestation.map(station1 =>
                <div>
                    
                    <div className=''>
                        <div><h1 className=''>{station1.Nimi}</h1></div>
                        <div>{station1.Osoite} {station1.Kaupunki}</div>
                        <div>{station1.address} {station1.Operaattor}</div>
                        <div>{station1.x} {station1.y}</div>
                    </div>
                    
                </div>)}
                */