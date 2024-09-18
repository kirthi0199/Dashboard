import React from 'react';
import { useEffect } from 'react';
import "./HardWare.css";
import { useNavigate } from 'react-router-dom';

import ReactGA from 'react-ga4';
const HardWare = () => {
const navigate=useNavigate()

const HomePage =()=>{
    navigate("/")
}
const userGender = 'male'; // Replace this with your logic to get the user's gender

useEffect(() => {
  // Send the gender event to Google Analytics
  ReactGA.event('gender', {
    category: 'User',
    label: userGender,
  });
}, [userGender]); // Add userGender as a dependency
  return (
<div className='container'>
<div className='row'>
    <h1 className='text-center'>Impactree Data Analytics and presentation Layer</h1>


<div className='col-lg-6'>
<h1>Record and store GPS Location along with takeoff ,flying and flying route. </h1>
</div>
<div className='col-lg-6'>
<h1>Store and Transmit Facility , hence even if network not available , data is stored and then transmitted.</h1>
</div>
<div className='col-lg-6'>
<h1>Ability to Detect takeoff and landing of the drone . For Tracker : will need to incorporate motion sensor.</h1>
</div>
<div className='col-lg-6'>
<h1>Ability to calculate Area Covered with estimated altitude from GPS in case of Tracker.</h1>
</div>

</div>
<button className='text-end' onClick={HomePage}>Back</button>
</div>
  )
}

export default HardWare