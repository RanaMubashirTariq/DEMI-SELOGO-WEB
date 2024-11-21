import React, { useState } from 'react';
import './NavbarSection.css';

export default function NavbarSection() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className={`navbar-section ${isNavbarOpen ? 'navbar-open' : ''}`}>
      <div className="first-part">
        <img src="/Images/First-part-pic.svg" alt="Logo" />
      </div>
      <div className="middle-part">
        <img src="/Images/Middle-part-pic.svg" alt="Middle" />
      </div>
      <div className={`third-part ${isNavbarOpen ? 'open' : ''}`}>
        <div className="navbar-icons">
          <img src="/Images/Icons/Add-icon.svg" alt="Add" />
        </div>
        <div className="navbar-icons">
          <img src="/Images/Icons/Massage-icon.svg" alt="Message" />
        </div>
        <div className="navbar-icons">
          <img src="/Images/Icons/Notification-icon.svg" alt="Notification" />
        </div>
        <div className="navbar-icons">
          <img src="/Images/Icons/Contact-icon.svg" alt="Contact" />
        </div>
      </div>

      <button className="menu-toggle" onClick={toggleNavbar}>
        <img src="/Images/First-part-pic.svg" alt="Menu" />
      </button>
    </div>
  );
}