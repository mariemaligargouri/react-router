import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductDetail = ({ products, match }) => {
  const product = products.find((el) => el.id.toString() === match.params.id);
  return (
    <Card>
      <Card.Img variant="top" src={product.imgSrc} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price} </Card.Text>
        <Link to="/products">
          <Button variant="primary">Go Back </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductDetail;
