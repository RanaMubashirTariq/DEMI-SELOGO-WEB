import React from 'react'
import './MainSection.css';

export default function MainSection() {
  return (
      <>
    <div className='search-bar'>
          <div className='input-row'>
            <img src="/Images/Icons/Search-icon.svg"/>
            <input type="text" placeholder='Search' className='input-d' />
          </div>
           <div className='left-part-search-bar'>
             <img src="/Images/Icons/Map-icon.svg"/>
             <button className='search-btn'>Map</button>
           </div>
    </div>
     

     <div className='content-box'>
         <div className='content-heading'><h2>Simplify your shopping with us – Finnish quality at your fingertips."</h2></div>
         <div className='content-paragraph'><p>Uncover Inspiration, Get Motivated, and live a better life.</p></div>
       </div>
    </>
  )
}

