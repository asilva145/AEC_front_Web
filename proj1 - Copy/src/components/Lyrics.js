import React from "react";
import Col from "react-bootstrap/Col";


export class Album extends React.Component {
  constructor(props) {
    super(props);
    const Album=this.props.name;
    this.state = {
      hovered: false
    };
  }
  render() {
    return (
      <Col xs lg="2">
        <img
          src={this.props.src}
          alt={this.props.alt}
          title={this.props.title}
          className="img-fluid"
          
          onMouseOver={() => this.setState({ishovered: true})}
          onMouseOut={() => this.setState({ishovered: false})}

          style={{transform: `${this.state.ishovered ? 'translate(0,0)' : 'translate(30px,30px)'}`}}
        />
      </Col>
    );
  }
}