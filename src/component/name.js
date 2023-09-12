import React from "react";
import product from "../product";
import Card from "react-bootstrap/Card";

function Name() {
  return (
    <Card.Title>
      <strong>{product.name}</strong>
    </Card.Title>
  );
}

export default Name;