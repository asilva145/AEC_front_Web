import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Album } from "./Album";
import  "./Catalogue";




const album2 = [

  
  {
    chanteur: "Marisa Monte",
    album : "Colecao",
    src: require("../img/marisa.jpg"),
    id: 1,
  },
  {
   chanteur: "Caetano Veloso",
    album : "Best Of Caetano Veloso",
    src: require("../img/caetano.png"),
    id: 2,
  },
  {
    chanteur: "Alceu valenca",
    album: "A arte de Alceu Valenca",
    src: require("../img/alceu.png"),
    id: 3,
  },
  {
    chanteur: "Maria mendonca",
    album: "Todos os cantos",
    src: require("../img/marilia.jpg"),
    id: 4,
  },

  {
    chanteur: "Raul seixas",
    album: "A arte de Raul Seixas",
    src: require("../img/raul.jpg"),
    id: 5,
  },
  {
    chanteur: "Chico Buarque",
    album: "Ao vivo Paris Le Zenith",
    src: require("../img/chico.png"),
    id: 6,
  },
   
  
  
];



export class Catalogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rechercher:"", musiquelist : album2 };
    this.Rechercher = this.Rechercher.bind(this);
    this.hovered =this.hovered.bind(this)
       
  }

  
  Rechercher(){
    let chanteur = document.getElementById("inputRechercher").value;
    this.setState({rechercher:chanteur});
 
  }
 
  hovered(){
    this.setState({hovered:false})
 
  }
 
  render() {
      return (
        <Container fluid>
          <Row className="text-center">
            
            <Form>
              <InputGroup className="group-sm mb-3">
                <FormControl
                  id="inputRechercher"
                  placeholder="Rechercher"
                  aria-label="Rechercher"
                  aria-describedby="Rechercher"
                  onChange={this.Rechercher}
                />
                
                </InputGroup>
            </Form>
          
          </Row>
          <Row >
            
            <h4 >Album Artiste</h4 >
          </Row>
          <Row>
          
          {this.AlbumArtiste()}
         
          
          </Row>
        </Container>
      );
  }
  
 

  AlbumArtiste() {

    var searchResult = this.state.musiquelist;

    if( this.state.rechercher !== '' ){
      searchResult = this.state.musiquelist.filter(l => ( l.album.toLowerCase().includes(this.state.rechercher.toLowerCase()) 
      || l.chanteur.toLowerCase().includes(this.state.rechercher.toLowerCase())) );
    }     

    return searchResult.map((element, i) => (
      
      <Album
      key={"chanteur" + i}
      src={element.src}
      chanteur={element.chanteur}
      album={element.album}
      id={element.id}
      ></Album>
    ));

  }
}

