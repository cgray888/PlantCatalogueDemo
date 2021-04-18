import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PlantCard = (props) => {
  console.log({props});
  return (
    <Card>
      <Card.Img src={props.image}></Card.Img>
      <Card.Body>
        <Card.Title>
          {props.name} - ${props.price}
        </Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Text>
        <Button variant='warning' size='sm'>
          Edit
        </Button>
        <Button variant='danger' size='sm'>
          Delete
        </Button>
      </Card.Text>
    </Card>
  );
};

export default PlantCard;
