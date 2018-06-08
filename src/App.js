import React, { Component } from 'react';
import { Grid, Row, Col, Navbar, NavbarBrand, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import './App.css';
var Button = require('react-bootstrap/lib/Button');
//import logo from './logo.svg';

const welcome = "Welcome to React";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand">React-Bootstrap</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">
                  Link
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Link
                </NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  Account Management
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Profile
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        
          <Welcome />
      </div>
    );
  }
}

class Welcome extends Component {
  constructor(){
    super();
    const DragonEvents = [
      { type: 'attack', value: "12", target: 'Norman' },
      { type: 'yawn', value: "48", target: 'Norman' },
      { type: 'eat', value: "horse", target: 'Norman' },
      { type: 'attack', value: "24", target: 'abnormal' },
    ]
    const TotalDamageOnDragon = DragonEvents.filter(
      function(event){
        return event.type === 'attack' 
      }
    )
    .filter(function(event){
      return event.target === 'Norman'
    })
    console.log(TotalDamageOnDragon);
  }
  
  render() {
    return (
      <div >
        <h1 className="App-title"> {welcome} </h1>
        <Grid className="tinted-image">
          <Row className="show-grid">
            <Col xs={12} md={8}>
              This is a joke
            </Col>
            <Col xs={6} md={4}>
              This is not a joke
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} md={4}>
              This is not a joke
            </Col>
            <Col xs={6} md={4}>
              This is not a joke
            </Col>
            <Col xsHidden md={4}>
            This is not a joke
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} xsOffset={6}>
            This is not a joke
            </Col>
          </Row>

          <Row className="show-grid">
            <Col md={6} mdPush={6}>
            This is not a joke
            </Col>
            <Col md={6} mdPull={6}>
            This is not a joke
            </Col>
          </Row>
        </Grid>
        <Button bsStyle="primary" bsSize="large" block>
          Block level button
        </Button>
        <Button bsSize="large" block>
          Block level button
        </Button>
      </div>
    );
  }
}
export default App;
