import React from "react";
import ky from "ky";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const handlePlantDelete = (id) => {
  (async () => {
    try {
      await ky.delete(`/plants/${id}`);
    } catch (error) {
      console.error("Delete error: " + error);
    }
  })();
};

const PlantCard = (props) => {
  return (
    <Card>
      <Card.Img src={props.image}></Card.Img>
      <Card.Body>
        <Card.Title>
          {props.name} - ${props.price}
        </Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Form>
        <Button variant='warning' size='sm'>
          Edit
        </Button>
        <Button
          variant='danger'
          size='sm'
          type='submit'
          onClick={() => handlePlantDelete(props.plant_id)}
        >
          Delete
        </Button>
      </Form>
    </Card>
  );
};

export default PlantCard;
