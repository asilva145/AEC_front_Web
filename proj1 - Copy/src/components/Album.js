import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export class Client extends React.Component {
  constructor(props) {
    super(props);
        this.state = {hovered: false };
  }
  goToLyrics(params) {
    console.log('test');
  }
  render() {
    return (
      <Col xl="2">
        <Card
                 
        >

          <Card.Img variant="top" src={this.props.src}
          className="img-fluid"
          onMouseOver={() => this.setState({hovered: true})}
          onMouseOut={() => this.setState({hovered: false})}
          style={{transform: `${this.state.hovered ? 'translate(20px,20px)' : 'translate(0px,0px)'}`}}
          />
          
          <Card.Body>
              <Card.Title>{this.props.chanteur}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted " > {this.props.album} </Card.Subtitle>
              <a href="#" className="card-link">Card link</a>
          </Card.Body>


        </Card>
      </Col>
      
    );
  }
}

