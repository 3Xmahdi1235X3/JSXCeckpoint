import React from "react";
import product from "../product";
import Card from "react-bootstrap/Card";

function Description() {
  return (
    <Card.Text>
      <strong>Description:</strong> {product.description}
    </Card.Text>
  );
}

export default Description;