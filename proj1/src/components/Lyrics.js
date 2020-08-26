import React from "react";
import Col from "react-bootstrap/Col";

export class Lyrics extends React.Component {
  constructor(props) {
    super(props);    
  }
  render() {
    return (
      <Col xs lg="2">
        <img
          src={this.props.lyrics.src}
          alt={this.props.lyrics.chanteur}
          title={this.props.lyrics.cuvei}
          className="img-fluid"
        />        
      </Col>
    );
  }
}