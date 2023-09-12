import React from "react";
import product from "../product";
import Card from "react-bootstrap/Card";

function Image() {
  return <Card.Img src={product.imageUrl} alt={product.name} />;
}

export default Image;