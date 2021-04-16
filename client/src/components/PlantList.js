import React, {useState, useEffect} from "react";
import ky from "ky";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const PlantList = () => {
  const [plants, setPlants] = useEffect([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await ky("/plants").json();
        setPlants(response);
      } catch (error) {
        console.error("API GET Error: " + error);
      }
    })();
  }, []);

  return (
    <Col>
      <Card className='mb-4'>Test</Card>
    </Col>
  );
};

export default PlantList;
