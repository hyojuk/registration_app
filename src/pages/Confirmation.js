import React from 'react';
import { firebase } from '../myfirebase';
import Write from '../components/Write';

import Container from 'react-bootstrap/Container';

const Confirmation = () => {
  const confirmRef = firebase.database().ref(`Confirm`);
  return (
    <Container style={{marginTop:'50px'}}>
        <h1>Confirmed</h1>
        <Write pageName="Confirmation" firebaseRef={confirmRef}></Write>
    </Container>
  )
}

export default Confirmation;