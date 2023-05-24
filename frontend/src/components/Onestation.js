import React from 'react'
import { useState, useEffect } from 'react';


export default function onestation() {

    const [onestation, setOnestation] = useState([]);



    useEffect(async () => {
        const station = await fetch('http://localhost:4000/restaurant').then((res) =>
            res.json()
        )

        console.log(station)
        setOnestation(station)
    }, []);

    return (

        <div className="">
            {onestation.map(station =>
                <div>
                    
                    <div className=''>
                        <div><h1 className=''>{station.Nimi}</h1></div>
                        <div><i class=""></i>{station.Osoite} <i class=""></i>{station.Kaupunki}</div>
                        <div><i class="" />{station.address} <i class=""></i>{station.Operaattor}</div>
                        <div><i class="" />{station.x} <i class=""></i>{station.y}</div>
                    </div>
                    
                </div>)}
        </div>
    );
}
