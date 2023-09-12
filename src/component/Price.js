import React from "react";
import product from "../product";
import Card from "react-bootstrap/Card";

function Price() {
  return (
    <Card.Text>
      <strong>Price:</strong> {product.price}
    </Card.Text>
  );
}

export default Price;