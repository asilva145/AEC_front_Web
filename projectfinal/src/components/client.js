import React from "react";
import { Link } from "react-router-dom";
import {Card} from "react-bootstrap"

export class Pokemon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
     
<Card>
  <Card.Img variant="top" picture={this.props.picture}/>
  <Card.Body>
          <Link to={"pokemons/" + this.props.nom + this.props.picture +this.props.attaque + "?id=" + this.props.id}>
            <h4>nom : {this.props.nom}  picture : {this.props.picture}</h4>
          </Link>
          <Link to={"pokemons/" + this.props.nom + this.props.picture +this.props.attaque + "?id=" + this.props.id}>
            travail : {this.props.travail}
            
          </Link>

        </Card.Body>
        
      </Card>   
     

      </>
    );
  }
}

