import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Link,Routes } from "react-router-dom";

export default function() {

  const navigate=useNavigate()

  function goToPrediction()
  {navigate("/prediction")}
  
  function goToYield()
  {navigate("/yield")}
  
  function goToAbout()
  {navigate("/")}
  return (
    <Navbar bg="light" expand="lg"style={{position:"absolute",width:"100%",bottom:"93vh"}}>
    <Container>
      <Navbar.Brand href="#home">Welcome</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          
          
        </Nav>
        <Button onClick={goToAbout} variant="primary">Home</Button>{" "}&nbsp;
        <Button onClick={goToPrediction} variant="success">Crop prediction  </Button>{" "}&nbsp;
        <Button onClick={goToYield} variant="success">Yield Prediction</Button>{" "}&nbsp;
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
