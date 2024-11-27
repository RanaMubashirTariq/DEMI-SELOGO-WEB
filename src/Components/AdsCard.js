import React from 'react'
import './AdsCard.css';

export default function AdsCard() {
  return (
    <div className='cards-for-ads-d'>
         <div className='ads-content-d'>
            <h2>Popular Ads</h2>
         </div>
      
       <div className='three-cards'>
          <div className='ads-single-card'>
            <div className='heading-d'>
                <div className='single-cards-ads-pic'><img src="./Images/Person.svg"/></div>
                <div className='single-card-ads-content'>
                    <div className='single-contnet-heading'><h2>Hi, John</h2></div>
                    <div className='single-contnet-paragraph'><p>Customer since 2017</p></div>
                </div>
            </div>
            <div className='middle-part'><h3>Top links for you</h3></div>
            
            <div className='four-cards-d'>
                  <div className='row-pics'>
                  <div className='cards-1st'>
                  <img src="/Images/Lakage.svg"/>
                </div>
                <div className='cards-1st'>
                  <img src="/Images/Mobile.svg"/>
                </div>
                  </div>
                  <div className='row-pics'>
                  <div className='cards-1st'>
                  <img src="/Images/Watch.svg" alt="" />
                </div>
                <div className='cards-1st'>
                  <img src="/Images/Man.svg" alt="" />
                </div>
                  </div>
            </div>
          </div>

          <div className='card-2nd'>
            <div className='card-2nd-content'><h3>Up to 70% off | Electronics clearance store</h3></div>
             <div className='card-2nd-pic'><img src="./Images/Laptop-pic.svg"/></div>
             <div className='card-2nd-last-part'><p>See more</p></div>
          </div>

          <div className='card-3rd'>
             <div className='top-part'>
               <div className='content-part1'><h3>Shop on the Amazon App</h3></div>
               <div className='content-part2'><p>Fast, convenient and secure | Over 17 crore products in your pocket</p></div>
               <div className='content-part3'><h3>Download the Amazon App</h3></div>
             </div>
             <div className='card-2nd-pic'><img src="/Images/Brand-laptop.svg" alt="" /></div>
          </div>
          </div>
    </div>
  )
}
