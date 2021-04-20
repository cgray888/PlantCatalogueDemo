import React, {useState, Fragment} from "react";
import ky from "ky";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

const PlantForm = (props) => {
  const [plantName, setPlantName] = useState("");
  const [plantDescription, setPlantDescription] = useState("");
  const [plantPrice, setPlantPrice] = useState("");
  const [plantImage, setPlantImage] = useState("");
  const [open, setOpen] = useState(false);

  const handlePlantFormSubmit = (values) => {
    (async () => {
      try {
        await ky.post("/plants", {
          json: {
            name: values[0],
            description: values[1],
            price: values[2],
            image: values[3],
          },
        });
      } catch (error) {
        console.error("Post error: " + error);
      }
    })();
  };

  return (
    <Fragment>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls='collapse-form'
        aria-expanded={open}
        variant='success'
        size='sm'
      >
        Add Plant
      </Button>
      <Collapse in={open}>
        <div id='collapse-form'>
          <Form noValidate>
            <Form.Group>
              <Form.Row>
                <Col>
                  <Form.Control
                    placeholder='Name'
                    value={plantName}
                    type='text'
                    onChange={(e) => setPlantName(e.target.value)}
                    required
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder='Description'
                    value={plantDescription}
                    onChange={(e) => setPlantDescription(e.target.value)}
                    required
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Control
                    placeholder='Price'
                    value={plantPrice}
                    onChange={(e) => setPlantPrice(e.target.value)}
                    required
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder='Image'
                    value={plantImage}
                    onChange={(e) => setPlantImage(e.target.value)}
                    required
                  />
                </Col>
              </Form.Row>
              <Button
                size='sm'
                type='submit'
                onClick={() =>
                  handlePlantFormSubmit([
                    plantName,
                    plantDescription,
                    plantPrice,
                    plantImage,
                  ])
                }
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
      </Collapse>
    </Fragment>
  );
};

export default PlantForm;
