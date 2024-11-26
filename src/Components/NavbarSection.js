import React, { useState } from 'react';
import './NavbarSection.css';
import MainSection from './MainSection';
import Slider from './Slider';

export default function NavbarSection() {
  const [isThirdPartOpen, setIsThirdPartOpen] = useState(false);

  const toggleThirdPart = () => {
    setIsThirdPartOpen(!isThirdPartOpen);
  };

  return (
    <>
    <div className='navbar-section'>
      <div className='first-part'>
        <img src="/Images/First-part-pic.svg" alt="First Part" />
      </div>
      <div className='second-part'>
        <img src="/Images/Middle-part-pic.svg" alt="Second Part" />
      </div>
      <div className='third-part-toggle'>
        <button className='toggle-button' onClick={toggleThirdPart}>
          <img src="/Images/First-part-pic.svg"/>
        </button>
        <div className={`third-part ${isThirdPartOpen ? 'open' : ''}`}>
          <div><img src="/Images/Icons/Add-icon.svg" alt="Add" /></div>
          <div><img src="/Images/Icons/Massage-icon.svg" alt="Message" /></div>
          <div><img src="/Images/Icons/Notification-icon.svg" alt="Notification" /></div>
          <div><img src="/Images/Icons/Contact-icon.svg" alt="Contact" /></div>
        </div>
      </div>
    </div>


   <MainSection/>
    <Slider/>
    </>
  );
}

