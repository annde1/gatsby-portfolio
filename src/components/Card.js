import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "gatsby";

const CardComponent = ({ title, description, price, id }) => {
  return (
    <Link to={`/projects/${id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/assets/glasses.jpeg" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Price: {price}</Card.Text>
          <Button variant="primary">More details</Button>
        </Card.Body>
      </Card>
    </Link>
  );
};
export default CardComponent;
