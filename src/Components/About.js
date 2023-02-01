import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { img4 } from "../Images/img4.png"
import {sapling} from "../Images/sapling.png"
import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Stack, HStack, VStack, Flex, Spacer, Center, Text, Square } from '@chakra-ui/react'


export default function
  () {
  const navigate = useNavigate()

  function goToPrediction() { navigate("/prediction") }

  function goToYield() { navigate("/yield") }

  return (
    <div >
      <Navbar bg="light" expand="lg">
        <Container>
          <Image
            borderRadius='10%'
            boxSize='50px'
            src={require("../Images/img4.png")}
            alt='Dan Abramov'
          />&nbsp;&nbsp;
          <Navbar.Brand style={{fontSize:30,fontWeight:'bold'}} href="#home">SAPLING</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{backgroundColor:'  rgb(216, 213, 160)'}}>
        <div style={{ textAlign: 'center',padding:'2%' }}>
          <h3>Crop Yield Prediction</h3>
          <p>using Machine Learning algorithms</p>
        </div>
        {/* <div className='center'>

          <img src={require("../Images/Img1.jpg") } />
        </div> */}


        <Flex >
          <Center w='600px' >
            {/* <Text>Developed by</Text> */}
            {/* <Text>Our expertise</Text> */}
            <ul >
              <h3>Our Expertise</h3>
              <li>We will predict crop for you</li>
              <li>Will provide guidance for maintanence</li>
              <li>Personal support available</li>
              <li>Yield to be received would be estimated </li>
            </ul>
          </Center>
          <Square size='350px'>
            <Text></Text>
          </Square>
          <Box flex='1' >
            {/* <Text>Box 3</Text> */}
            <Image boxSize='500px'
              objectFit='cover'
              borderRadius='5%'
              src={require("../Images/sapling.png")}
              alt='Dan Abramov' />
          </Box>
        </Flex>
        <div style={{ textAlign: 'center', padding :'5%'}}>
          <Button onClick={goToPrediction} variant="success">Crop prediction  </Button>{" "}&nbsp;
          <Button onClick={goToYield} variant="success">Yield Prediction</Button>{" "}&nbsp;
        </div>

      </div>

    </div>




  )
}
