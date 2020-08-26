import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Client } from "./Client";
import { Album } from "./Album";
import  "./Bottin";




const album = [
  {
    chanteur: "Marisa monte",
    album : "Memórias, Crônicas e Declarações de Amor",
    src: require("../img/marisa.png"),
  },
  {
   chanteur: "Caetano Veloso",
    album : "Best Of Caetano Veloso",
    src: require("../img/caetano.png"),
  },
  {
    chanteur: "Alceu valessa",
    album: "A arte de Alceu Valenca",
    src: require("../img/alceu.png"),
  },
  {
    chanteur: "Maria mendonca",
    album: "Todos os cantos",
    src: require("../img/marilia.jpg"),
  },

  {
    chanteur: "Raul seixas",
    album: "A arrte de Raul Seixas",
    src: require("../img/raul.jpg"),
  },
  {
    chanteur: "Chico Buarque",
    album: "Ao vivo Paris Le Zenith",
    src: require("../img/chico.png"),
  },
   
  
  
];


export class Bottin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rechercher:"", listeClients : album };
    this.Rechercher = this.Rechercher.bind(this);
       
  }
  Rechercher(){
    let chanteur = document.getElementById("inputRechercher").value;
    this.setState({rechercher:chanteur});
  }
 
 
  render() {
      return (
        <Container fluid>
          <Row className="text-center">
            <Form>
              <InputGroup className="mb-3 .btn-success">
                <FormControl
                  id="inputRechercher"
                  placeholder="Rechercher"
                  aria-label="Rechercher"
                  aria-describedby="Rechercher"
                  onChange={this.Rechercher}
                />
                <InputGroup.Append>
                  <Button variant="outline-primary" onClick={this.Rechercher}>Rechercher</Button>
                </InputGroup.Append>
                </InputGroup>
            </Form>
          
          </Row>
          <Row >
            
            <h4>Album Artiste</h4>
          </Row>
          <Row>
                    {this.AfficherBottin()}
          </Row>
        </Container>
      );
  }
  
 

  AfficherBottin() {
    if(this.state.rechercher === ""){
      console.log('test');
       return this.state.listeClients.map((element, i) => (

        <Client
          key={"chanteur" + i}
          src={element.src}
          chanteur={element.chanteur}
          album={element.album}
        
        ></Client>
       
        
      ));
    }

  
    else {
      const searchResult = this.state.listeClients.filter(l => l.chanteur.toLowerCase().includes(this.state.rechercher.toLowerCase()));
      return searchResult.map((element, i) => (
        <Client
           key={"chanteur" + i}
          src={element.src}
          chanteur={element.chanteur}
          album={element.album}
        ></Client>
      ));
    }
  }
}