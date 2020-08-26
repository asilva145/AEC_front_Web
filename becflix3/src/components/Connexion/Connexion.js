import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Container, Row, Col} from "react-bootstrap";


export class Connexion extends React.Component {
  constructor(props) {  
    super(props);  
    this.connx = this.connx.bind(this);  
  } 
  connx(){
    let connecter = false;

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    if (email.toLowerCase() === "andrea.fabricia@gmail.com" && pass === "dea06")
       connecter = true;
    this.props.onClick(connecter);  
  } 

  render() {
    return (
      <Container>
        
          <Row className="text-center">
            <Col>
              <h2 >SPOTIFY QUEBECOIS</h2>
              
            </Col>
          </Row>
         
              <Form>
                <Form.Group controlId="email">
                  <Form.Label>courriel</Form.Label>
                  <Form.Control type="email" placeholder="veuillez rentrer votre mot de passe"/>
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>mot de passe</Form.Label>
                  <Form.Control type="password" placeholder="mot de passe"/>
                </Form.Group>

                <Button variant="primary" onClick={this.connx}>
                  Submit
                </Button>
              </Form>
            
       
      </Container> 
    );
  }
}