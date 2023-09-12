import React from "react";
import "./App.css"; 
import Name from "./component/name";
import Price from "./component/Price";
import Description from "./component/Description";
import Image from "./component/Image";
import product from "./product.js"; 
import Card from "react-bootstrap/Card";
import { Container, Row,Col } from "react-bootstrap";

function App() {
  const firstName = "mehdi"; 
  
  return (
      <Container  className = "my-auto">
          <Row>
            <Col className="p-3">
            <p>Hello, {firstName ? firstName : "there!"}</p>
            </Col>
            <Col className="p-3 d-flex justify-content-end">
            {firstName && <img src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg" className="rounded-circle" style={{width:35,height:35}} alt="user"/>
}
</Col>
          </Row>
        <div className="p-3 d-flex justify-content-center">
        <Card style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
        </div>
        
      </Container>
  );
}

export default App;