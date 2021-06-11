import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <div className="row mt-4">
      {products.map(produit => 
        <Card style={{ width: "18rem" }} className="col-md-3 mx-auto">
          <Card.Img variant="top" src={produit.imgSrc} />
          <Card.Body>
            <Card.Title>{produit.name}</Card.Title>
            <Link to={`/products/${produit.id}`}>
              <Button variant="primary">See Price</Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Products;
