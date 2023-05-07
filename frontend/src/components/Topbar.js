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
                <Link to="/statistics">Statistics</Link></div>
                <div className='topbar'>
                <Link to="/logout">Logout</Link></div>            
        </div>
    )

}

export default Topbar;