
import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export class Disc extends React.Component {
  constructor(props) {
  super(props);
  }
  render() {
    return (
      <Col xl="2">
        <Card
                 
        >

          <Card.Img variant="top" src={this.props.src}
          className="img-fluid"
          
          />
          
          <Card.Body>
              <Card.Title>{this.props.chanteur}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{this.props.album}</Card.Subtitle>
              
          </Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroupItem>
            <a href="mailto:Homer.Simposon@gmail.com">
                {this.props.nom.split(" ")[0]}.
                {this.props.nom.split(" ")[1]}@gmail.com
            </a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="tel:+1-666-666-6666">+1 (666) 666-6666</a>
          </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
      
    );
  }
}