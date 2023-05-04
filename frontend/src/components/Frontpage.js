import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function front() {

const [ test, setTest ] = useState([]);

useEffect(async () => {
    const alltest = await fetch('http://localhost:5000/Duration').then((res) =>
    res.json()
    )
    console.log(alltest)
    setTest(alltest)
})

return (
    <div>
        <h1>Test text</h1>
    </div>
)
}