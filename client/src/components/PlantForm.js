import React, {useState} from "react";
import ky from "ky";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const PlantForm = () => {
  const [plantName, setPlantName] = useState("");
  const [plantDescription, setPlantDescription] = useState("");
  const [plantPrice, setPlantPrice] = useState("");
  const [plantImage, setPlantImage] = useState("");

  const handlePlantFormSubmit = (values) => {
    console.log(values);
    // (async () => {
    //   try {
    //     await ky.post("/plants", {json: values});
    //   } catch (error) {
    //     console.error("Post error: " + error);
    //   }
    // })();
  };

  return (
    <Form noValidate>
      <Form.Group>
        <Form.Row>
          <Col>
            <Form.Control
              placeholder='Name'
              value={plantName}
              type='text'
              onChange={(e) => setPlantName(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder='Description'
              value={plantDescription}
              onChange={(e) => setPlantDescription(e.target.value)}
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Control
              placeholder='Price'
              value={plantPrice}
              onChange={(e) => setPlantPrice(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder='Image'
              value={plantImage}
              onChange={(e) => setPlantImage(e.target.value)}
            />
          </Col>
        </Form.Row>
        <Button
          size='sm'
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
  );
};

export default PlantForm;
