import React, {useState, useEffect} from "react";
import ky from "ky";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const PlantForm = () => {
  //   const [plants, setPlants] = useState([]);

  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const response = await ky("/plants").json();
  //         setPlants(response);
  //         // test
  //         console.log(response);
  //       } catch (error) {
  //         console.error("API GET Error: " + error);
  //       }
  //     })();
  //   }, []);

  return (
    <Form>
      <Form.Group>
        <Form.Row>
          <Col>
            <Form.Control placeholder='Name' />
          </Col>
          <Col>
            <Form.Control placeholder='Description' />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Control placeholder='Price' />
          </Col>
          <Col>
            <Form.Control placeholder='Image' />
          </Col>
        </Form.Row>
        <Button size='sm'>Submit</Button>
      </Form.Group>
    </Form>
  );
};

export default PlantForm;
