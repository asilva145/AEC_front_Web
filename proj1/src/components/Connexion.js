import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import {Container, Row, Col} from "react-bootstrap";
import logo from '../img/spotify.png';

export class Connexion extends React.Component {
  constructor(props) {  
    super(props);  
    this.con = this.con.bind(this);  
  } 
  con(){
    let connection = false;
    const courriel = document.getElementById('courriel').value;
    const pass = document.getElementById('motdepasse').value;
    
    if (courriel.toLowerCase() === "andrea.fabricia@gmail.com" && pass === "patate")
      connection = true;
    this.props.onClick(connection);  
  } 

  render() {
    return (
      <Container>
        <Jumbotron>
          <Row className="text-center background:black" >
            
            <Col>
            <img src={logo} alt="musique" width="200px" className="text-center"/>
              <h1  >De la musique pour tous.</h1>
              
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="courriel">
                 <Form.Control type="courriel" placeholder="Adresse courriel ou nom d'utilisateur"/>
                </Form.Group>

                <Form.Group controlId="motdepasse">
                 <Form.Control type="motdepasse" placeholder="Mot de passe"/>
                </Form.Group>
                </Form>
                <Form className="text-center">
                <Button variant="btn btn-dark " onClick={this.con}>
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