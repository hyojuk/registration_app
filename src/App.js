import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { firebase } from "./myfirebase";
import { Nav, Navbar, Container } from 'react-bootstrap';
import Register from './pages/Register';
import Reregister from './pages/Reregister';
import Confirmation from './pages/Confirmation';
import Home from './pages/Home';
import About from './pages/About';
import ClassPage from './pages/ClassPage';
import Login from './pages/Login';

const App = () => {
  const firebaseRef = firebase.database().ref(`Year`);
  const [year, setYear] = useState("");
  useEffect(() => {
    firebaseRef.on("value", snap => {
      if (snap.exists()) {
        let obj = snap.val();
        setYear(obj['content']);
      } else {
        console.log("No data available");
      }
    });
  }, [firebaseRef, year]);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">St. Andrew Kim Korean School</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            {/* <Nav.Link href="/class">Class</Nav.Link> */}
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        
        <Route path="/" element={<Home year={year}/>} />
        <Route path="/register" element={<Register year={year}/>} />
        <Route path="confirmation" element={<Confirmation/>} />
        <Route path="/reregister" element={<Reregister year={year}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/class/*" element={<ClassPage/>} />
      
      </Routes>
      <Container style={{marginTop: '50px'}}>
        <hr/>
        <footer style={{color: 'gray'}}>
          <p style={{fontSize:'13px'}}>© St. Andrew Kim Korean School 
          <br/> <Login></Login></p>
        </footer>
      </Container>
    </div>
  )
}

export default App;
