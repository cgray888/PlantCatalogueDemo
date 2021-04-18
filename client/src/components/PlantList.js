import React, {useState, useEffect, Fragment} from "react";
import ky from "ky";
import PlantForm from "./PlantForm";
import PlantCard from "./PlantCard";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const PlantList = () => {
  const [plants, setPlants] = useState([]);

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

  const CardList = () => {
    return plants.map((item) => (
      <Col sm='12' md='3'>
        <PlantCard
          key={item.plant_id}
          plant_id={item.plant_id}
          image={item.image}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      </Col>
    ));
  };

  return (
    <Fragment>
      <Row>
        <Col sm='12'>
          <PlantForm />
        </Col>
      </Row>
      <Row>
        <CardList />
      </Row>
    </Fragment>
  );
};

export default PlantList;
