import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
// import Image from 'react-bootstrap/Image';
// import pic from "../Images/images.jfif"


export default function
  () {
  const navigate = useNavigate()

  function goToPrediction() { navigate("/prediction") }

  function goToYield() { navigate("/yield") }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Welcome</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{textAlign:"center"}}>
        <h3>This is our home page</h3>
        
        <p>We can add any information on this page</p>
       
      <Button onClick={goToPrediction} variant="success">Crop prediction  </Button>{" "}&nbsp;
      <Button onClick={goToYield} variant="success">Yield Prediction</Button>{" "}&nbsp;
      </div>
      
    </div>




  )
}
