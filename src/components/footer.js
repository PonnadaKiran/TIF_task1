import React from 'react';
import {FaInstagram} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";


const Footer = () => (
  <div className="footer">
    <div className="imgContainer">
      <img src="/images/van.png" alt="Company Van" />
    </div>
    <div className="contactus">
      <h2>Contact Us</h2>
      <p className="address">
        Lorem Ipsum Pvt Ltd. 5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
      </p>
      <p>example2020@gmail.com</p>
      <p>(904) 443-0343</p>
    </div>
    <div className="more">
      <h2>More</h2>
      <div>
        <p>About Us</p>
        <p>Products</p>
        <p>Career</p>
        <p>Contact Us</p>
      </div>
    </div>
    <div className="sociallink">
      <h2>Social Links</h2>
      <div id="links"> 
        <FaInstagram/>
        <FaTwitter/>
        <FaFacebookSquare/>
      </div>
      <p className="cpy">© 2022 Food Truck Example</p>
    </div>
  </div>
);

export default Footer;
