import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
  return (
    <>
     
    
      <div class="foot">
        <a href="#">
          <div className="navBackToTop">
            Back to top
        </div>
        </a>
      <div class="footer">
        <ul>
          <h3>Get to Know Us</h3>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About Amazon</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Press Center</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Amazon Devices</a></li>
          <li><a href="#">Amazon Tours</a></li>
        </ul>
        <ul>
          <h3>Make Money with Us</h3>
          <li><a href="#">Sell products on Amazon</a></li>
          <li><a href="#">Sell apps on Amazon</a></li>
          <li><a href="#">Become an Affiliate</a></li>
          <li><a href="#">Advertise Your Products</a></li>
          <li><a href="#">Self-Publish with Us</a></li>
          <li><a href="#">Host an Amazon Hub</a></li>
          <li><a href="#">›See More Make Money with Us</a></li>
        </ul>
        <ul>
          <h3>Amazon Payment Products</h3>
          <li><a href="#">Amazon Rewards Visa Signature Cards</a></li>
          <li><a href="#">Amazon.com Store Card</a></li>
          <li><a href="#">Amazon Business Card</a></li>
          <li><a href="#">Amazon Business Line of Credit</a></li>
          <li><a href="#">Shop with Points</a></li>
          <li><a href="#">Credit Card Marketplace</a></li>
          <li><a href="#">Reload Your Balance</a></li>
          <li><a href="#">Amazon Currency Converter</a></li>
        </ul>
        <ul>
          <h3>Let Us Help You</h3>
          <li><a href="#">Amazon and COVID-19</a></li>
          <li><a href="#">Your Account</a></li>
          <li><a href="#">Your Orders</a></li>
          <li><a href="#">Shipping Rates &amp; Policies</a></li>
          <li><a href="#">Amazon Prime</a></li>
          <li><a href="#">Returns &amp; Replacements</a></li>
          <li><a href="#">Manage Your Content and Devices</a></li>
          <li><a href="#">Amazon Assistant</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
      <div class="footer__logo">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo"/></div>
        <div class="footer__credit"><h1>Built By: <a href="https://rebieseid.com/" target="_blank" rel="noreferrer">Rebie Seid</a></h1>
        </div>
      </div>
      </>
  )
}

export default Footer