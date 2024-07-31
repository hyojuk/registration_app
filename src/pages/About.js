import React from 'react';
import { firebase } from '../myfirebase';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Write from '../components/Write';

const About = () => {
  const aboutRef = firebase.database().ref(`About`);
  const yearRef = firebase.database().ref(`Year`);
  return (
    <Container style={{marginTop:'50px'}}>
      <Col><h2>About</h2></Col>
        <Write pageName="About" firebaseRef={yearRef}></Write>
        <br/>
        <Write pageName="About" firebaseRef={aboutRef}></Write>
    </Container>
  )
}

export default About;