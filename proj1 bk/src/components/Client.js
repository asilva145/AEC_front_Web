import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export class Client extends React.Component {
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
              <Card.Title><a>{this.props.chanteur}</a></Card.Title>
              <Card.Subtitle className="mb-2 text-muted"><a>{this.props.album}</a></Card.Subtitle>
              
          </Card.Body>
          
        </Card>
      </Col>
      
    );
  }
}

