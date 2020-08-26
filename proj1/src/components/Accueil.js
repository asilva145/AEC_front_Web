import React from "react";
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import {Catalogue} from './Catalogue'
import {Connexion} from './Connexion'
import {Deconnexion} from './Deconnexion'

export class Accueil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {connecter: false};
    this.connexionPortail = this.connexionPortail.bind(this);
    this.verifier = this.verifier.bind(this);
  }

  verifier(connexion){
    this.setState({ connecter: connexion });
  }

  connexionPortail(){
    if(this.state.connecter){
      return (
        <Container fluid>
          <Row className="text-right t-0 ">
           
            <Col >
              <Deconnexion onClick={this.verifier} />
            </Col>
          </Row>
          <Catalogue/>

        </Container>  
      )
    }
    else{
      return(
        <Connexion onClick={this.verifier} />
      )
    }
  }
  render() {
    return (
        this.connexionPortail()
    );
  }
}

