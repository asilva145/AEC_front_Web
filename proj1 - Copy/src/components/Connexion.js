import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import {Container, Row, Col} from "react-bootstrap";
import logo from '../img/spotify.png';

export class Connexion extends React.Component {
  constructor(props) {  
    super(props);  
    this.handleConnexion = this.handleConnexion.bind(this);  
  } 
  handleConnexion(){
    let connecter = false;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    
    if (email.toLowerCase() === "andrea.fabricia@gmail.com" && pass === "patate")
      connecter = true;
    this.props.onClick(connecter);  
  } 

  render() {
    return (
      <Container>
        <Jumbotron>
          <Row className="text-center" >
            
            <Col>
            <img src={logo} alt="musique" width="200px" className="text-center"/>
              <h1  >De la musique pour tous.</h1>
              
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="email">
                 <Form.Control type="email" placeholder="Adresse courriel ou nom d'utilisateur"/>
                </Form.Group>

                <Form.Group controlId="password">
                 <Form.Control type="password" placeholder="Mot de passe"/>
                </Form.Group>
                </Form>
                <Form className="text-center">
                <Button variant="primary " onClick={this.handleConnexion}>
                  Se connecter 
                </Button>
              </Form>
            </Col>
          </Row>
        </Jumbotron>
      </Container> 
    );
  }
}