import React, {useState, Fragment} from "react";
import PlantInput from "./PlantInput";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const PlantCard = (props) => {
  const [open, setOpen] = useState(false);

  const handleDelete = (plant_id) => {
    props.PlantListDeleteCallback(plant_id);
  };

  const PlantCardCallback = (values) => props.PlantListPutCallback(values);

  const CardEditModal = (props) => {
    return (
      <Modal
        {...props}
        size='md'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PlantInput PlantFormCallback={PlantCardCallback} data={props.data} />
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <Fragment>
      <Card>
        <Card.Img src={props.image}></Card.Img>
        <Card.Body>
          <Card.Title>
            {props.name} - ${props.price}
          </Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        <Card.Text>
          <Button variant='warning' size='sm' onClick={() => setOpen(true)}>
            Edit
          </Button>
          <Button
            variant='danger'
            size='sm'
            type='submit'
            onClick={() => handleDelete(props.plant_id)}
          >
            Delete
          </Button>
        </Card.Text>
      </Card>
      <CardEditModal show={open} onHide={() => setOpen(false)} data={props} />
    </Fragment>
  );
};

export default PlantCard;
