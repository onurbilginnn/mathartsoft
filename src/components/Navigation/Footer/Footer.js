import React from 'react';

import MainLogoSVG from '../../SVGs/MainLogoSVG';
import obSolutionsLogo from '../../../assets/SVGs/OBSolutions.svg';
import NavigationItem from '../NavigationItem/NavigationItem';

import { Card, Col, Row } from 'react-bootstrap';

import './Footer.css'

const Footer = (props) => {
  const date = new Date();

  return (
    <Card >
      <Card.Footer>
        <Row className="mb-3" >
          <Col  >
            <Card.Title className="font-weight-bold" >Main</Card.Title>
            <NavigationItem link="/" exact >Home</NavigationItem>
            <NavigationItem link="/contact">Contact</NavigationItem>
          </Col>
          <Col>
            <Card.Title className="font-weight-bold" >Math</Card.Title>
            <NavigationItem link="/math/prime" exact >Prime Numbers</NavigationItem>
            <NavigationItem link="/math" exact >Math</NavigationItem>          
            <Card.Title className="font-weight-bold mt-4">Art</Card.Title>
            <NavigationItem link="/art/digital">Digital Drawings</NavigationItem>
            {/* <NavigationItem link="/art/hand">Hand Drawings</NavigationItem> */}
            <NavigationItem link="/under_construction">Hand Drawings</NavigationItem>
            {/* <NavigationItem link="/art/hand-to-digital">Hand to Digital</NavigationItem> */}
            <NavigationItem link="/under_construction">Hand to Digital</NavigationItem>
            <NavigationItem link="/art">Art</NavigationItem>
          </Col>
        <Col >
            <Col >
              <MainLogoSVG />
              <Card.Text className="brandText">Copyright &copy; {date.getFullYear()} MathArtSoft</Card.Text>
            </Col>
            <Col className="mt-5">
              <Card.Link href="https://obsolutions.co/" target="_blank" rel="noreferrer">
                <img src={obSolutionsLogo} className="obSolutionsLogo" alt="OB Solutions Logo" />
              </Card.Link>
              <Card.Text className="brandText">Powered by OB Solutions</Card.Text>
            </Col>     
        </Col>
        </Row>

      </Card.Footer>
    </Card>
  );
}

export default Footer;