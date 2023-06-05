import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Onestatio() {

    const [onestation, setOnestation] = useState([]);
    const {ID} = useParams();

/* Function to get information from one station
 * http://88.112.129.105:5000/Stations/1 works backend is fine
 * Something wrong with useParams, doesn't make calls
 * */
    useEffect( () => {
        async function station() {
        const response = await axios.get(
        `http://88.112.129.105:5000/Stations/${ID}`);
        setOnestation(response.data); }
        station();
    }, [])

    return (
        <div className="">
            UseParams problem, time is of the essence and have to go to Spain...
            {onestation.map((station1) =>
        

            <div className='formflex' >
            <div className='formboxnumber' ><div className='slidetextright' >{station1.Nimi}</div></div>
            <div className='formbox' ><div className='slidetextright'>{station1.Osoite} </div></div>
            <div className='formbox' ><div className='slidetextright'>{station1.Kaupunki} </div></div>
        
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