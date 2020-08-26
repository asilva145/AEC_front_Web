import React from 'react';

import "./App.css";  
import Container from 'react-bootstrap/Container';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col'; 
import logo from '../../img/logo.png';

function App() {  

  return (  

    <Container>  

      <Row className="justify-content-md-center">  

        <Col>  

        Présentation du mandat 

En cette période d'isolement, François Legault et Alexandre Taillefer vous ont contacté pour créer le nouveau NetFlix Québécois, BecFlix. Pour l'instant votre mandat est de créer l'interface "front-end".  

        </Col>  

               
      </Row>  
      <img src={logo} alt="logo" width="1000px"/>
      

    

    </Container>  

  );  

}  

 

export default App;
