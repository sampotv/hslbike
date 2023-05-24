import React from 'react';
import {Link} from 'react-router-dom';

const Topbar = () => {
    return(
        <div className='topbarback'>          
                <div className='topbar'>
                <Link to="/">Frontpage</Link></div>
                <div className='topbar'>
                <Link to="/stations">Bike Stations</Link></div>
                <div className='topbar'>
                <Link to="/statistics">Longest rides</Link></div>
                <div className='topbar'>
                <Link to="/avg">Averages</Link></div>
                <div className='topbar'>
                <Link to="/Top10days">Top10 busiest days</Link></div>            
        </div>
    )

}

export default Topbar;