import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <>
    <div className='footer-d'>
         <div className='footer-inner-d'>
               <div className='content-box-d'>
                      <div className="content-box-right-d">
                        <div className="content-box-logo-pic"><img src="/Images/Middle-part-pic.svg"/></div>
                        <div className="content-box-right-d-para"><p>The market of oppertunities</p></div>
                      </div>

                      <div className='content-box-left-d'>
                        <div className='part1-content-box'>
                           <h2>Commercial activities</h2>
                        <ul>
                            <li>Become a business customer</li>
                            <li>Information and inspiration</li>
                            <li>Admin for Companies</li>
                            <li>Releases</li>
                        </ul>
                        </div>

                        <div className='part1-content-box'>
                           <h2>About selgo</h2>
                        <ul>
                            <li>Work at selgo</li>
                            <li>Inspiration</li>
                        </ul>
                        </div>

                        <div className='part1-content-box'>
                           <h2>Terms and Privacy</h2>
                        <ul>
                            <li>Privacy statement</li>
                            <li>Privacy in Selgo</li>
                            <li>Privacy settings</li>
                            <li>Information cookies</li>
                        </ul>
                        </div>
                      </div>


               </div>
                      <div className='part1-content-box'>
                           <h2>Terms and Privacy</h2>
                        <ul>
                            <li>Customer Service</li>
                            <li>Secure Trading</li>
                            <li>Fix finished</li>
                            <li>Term of use</li>
                            <li>Advertising rules</li>
                            <li>Availability</li>
                        </ul>
                        </div>
         </div>
    </div>
        

        <div className='last-footer'>
             <div className='last-part-para'><p>© 2023 XYZ Company. All rights reserved</p></div>
             <div className='last-part-icons'>
                <div><img src="/images/Icons/Facebook.svg"/></div>
                <div><img src="/images/Icons/Internet.svg"/></div>
                <div><img src="/images/Icons/Instagram.svg"/></div>
                <div><img src="/images/Icons/Twitter.svg"/></div>
             </div>
        </div>
    </>
  )
}
