import React, {useState} from "react";
import ky from "ky";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const PlantCard = (props) => {
  const [newDescription, setNewDescription] = useState("");

  const handlePlantDelete = (id) => {
    (async () => {
      try {
        await ky.delete(`/plants/${id}`);
      } catch (error) {
        console.error("Delete error: " + error);
      }
    })();
  };

  //   const handlePlantEdit = (values) => {
  //     (async () => {
  //       try {
  //         await ky.put(`/plants/${values.id}}`, {
  //           json: {
  //             name: values.name,
  //             description: newDescription,
  //             price: values.price,
  //             image: values.image,
  //           },
  //         });
  //       } catch (error) {
  //         console.error("Put error: " + error);
  //       }
  //     })();
  //   };

  return (
    <Form>
      <Card>
        <Card.Img src={props.image}></Card.Img>
        <Card.Body>
          <Card.Title>
            {props.name} - ${props.price}
          </Card.Title>
          <Card.Text>
            <Form.Control
              defaultValue={props.description}
              onChange={(e) => setNewDescription(e.target.value)}
            ></Form.Control>
          </Card.Text>
        </Card.Body>
        <Card.Text>
          <Button
            variant='warning'
            size='sm'
            //onClick={() => handlePlantEdit(props)}
          >
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
        </Card.Text>
      </Card>
    </Form>
  );
};

export default PlantCard;
