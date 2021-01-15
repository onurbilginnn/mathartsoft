import React from 'react';

import MainLogoSVG from '../../SVGs/MainLogoSVG';
import obSolutionsLogo from '../../../assets/SVGs/OBSolutions.svg';
import NavigationItem from '../NavigationItem/NavigationItem';

import { Card } from 'react-bootstrap';

import './Footer.css'

const Footer = (props) => {
  const date = new Date();

  return (
    <div >
      <Card >
        <Card.Footer className="text-left">
          <div className="copyrightContainer mt-3 mb-3">
            <div className="linkContainers">
              <h6>Links</h6>
              <NavigationItem link="/" exact >Home</NavigationItem>
              <NavigationItem link="/about">About</NavigationItem>
              <NavigationItem link="/plugins">Plugins</NavigationItem>
              <NavigationItem link="/contact">Contact</NavigationItem>
            </div>
            <div className="linkContainers">
              <h6>Services</h6>
              <NavigationItem link="/finance">Finance</NavigationItem>
              <NavigationItem link="/inventory">Inventory</NavigationItem>
              <NavigationItem link="/services">All Services</NavigationItem>
            </div>
            <div className="companyContainer">
              <MainLogoSVG />
              <p className="brandText mb-5">Copyright &copy; {date.getFullYear()} MathArtSoft</p>
              <a href="https://obsolutions.co/" target="_blank" rel="noreferrer">
              <img src={obSolutionsLogo} className="obSolutionsLogo" alt="OB Solutions Logo" />
              </a>
              <p className="brandText">Powered by OB Solutions</p>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Footer;