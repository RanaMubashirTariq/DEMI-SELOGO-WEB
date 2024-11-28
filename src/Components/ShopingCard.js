import React from 'react'
import './ShopingCard.css';

export default function ShopingCard() {
  return (
    <div className='cards-container'>
        <div className='single-card'>
            <img src="./Images/Icons/Square-icon.svg"/>
            <h2>The Square</h2>
        </div>
        {/* 2 */}
        <div className='single-card'>
            <img src="./Images/Icons/Home-icon.svg"/>
            <h2>Property</h2>
        </div>
        {/* 3 */}
        <div className='single-card'>
            <img src="./Images/Icons/Travel-icon.svg"/>
            <h2>Travel</h2>
        </div>
        {/* 4 */}
        <div className='single-card'>
            <img src="./Images/Icons/Boat-icon.svg"/>
            <h2>Boat</h2>
        </div>
        {/* 5 */}
        <div className='single-card'>
            <img src="./Images/Icons/Electronic-icon.svg"/>
            <h2>Newly used Electronics</h2>
        </div>
        {/* 6 */}
        <div className='single-card'>
            <img src="./Images/Icons/Baki-icon.svg"/>
            <h2>MC</h2>
        </div>
        {/* 7 */}
        <div className='single-card'>
            <img src="./Images/Icons/Job-icon.svg"/>
            <h2>Jobs</h2>
        </div>
         {/* 8 */}
        <div className='single-card'>
            <img src="./Images/Icons/Home-icon.svg"/>
            <h2>Homes for Rent</h2>
        </div>
         {/* 9 */}
        <div className='single-card'>
            <img src="./Images/Icons/Car-icon.svg"/>
            <h2>Car and industry</h2>
        </div>
          {/* 10 */}
        <div className='single-card'>
            <img src="./Images/Icons/OnlineCar-icon.svg"/>
            <h2>TOnline Car</h2>
        </div>
           {/* 11 */}
        <div className='single-card'>
            <img src="/Images/Icons/Square-icon.svg"/>
            <h2>My Tender</h2>
        </div> 
    </div>
  )
}
