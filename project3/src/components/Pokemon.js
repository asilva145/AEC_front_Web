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
  <Card.Img variant="top" src={this.props.src}/>
  <Card.Body>
          <Link to={"Pokemons/" + this.props.nom + this.props.photo +this.props.attaque + "?id=" + this.props.id}>
            <h1>nom : {this.props.nom} photo:{this.props.photo}</h1>
          </Link>
        </Card.Body>
      </Card>   
     

      </>
    );
  }
}

