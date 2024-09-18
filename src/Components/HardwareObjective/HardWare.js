import React from 'react';
import { useEffect } from 'react';
import "./HardWare.css";
import { useNavigate } from 'react-router-dom';


const HardWare = () => {
const navigate=useNavigate()

const HomePage =()=>{
    navigate("/")
}
useEffect(() => {
  // This is where you would track gender data
  // Replace 'YOUR_GENDER_VALUE' with the actual gender value you want to track
  const userGender = 'YOUR_GENDER_VALUE'; // This should be fetched from your user state or context

  if (window.gtag) {
    window.gtag('event', 'gender', {
      'gender': userGender
    });
  }
}, []);
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