import React from 'react'
import './MainSection.css';

export default function MainSection() {
  return (
    <>
    <div className='main-section-d'>
         <div className='input-d'><img src="/Images/Icons/Search-icon.svg"/><input type="text" placeholder='Search' /></div>
         <div className='btn-d'><img src="/Images/Icons/Map-icon.svg"/> <button>Map</button></div>
    </div>

      <div className='text-d'>
        <div className='text-heading'><h2>Simplify your shopping with us – Finnish quality at your fingertips."</h2></div>
        <div className='text-paragraph'><p>Uncover Inspiration, Get Motivated, and live a better life.</p></div>
      </div>

    </>
  )
}
