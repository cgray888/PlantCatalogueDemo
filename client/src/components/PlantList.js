import React, {useState, useEffect, Fragment} from "react";
import ky from "ky";
import PlantForm from "./PlantForm";
import PlantCard from "./PlantCard";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const PlantList = () => {
  const [plants, setPlants] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await ky("/plants").json();
        setPlants(response);
      } catch (error) {
        console.error("API GET Error: " + error);
      }
    })();
  }, [update]);

  const PlantListPostCallback = (values) => {
    (async () => {
      try {
        await ky.post("/plants", {
          json: {
            name: values.name,
            description: values.description,
            price: values.price,
            image: values.image,
          },
        });
        // cant edit state because id is needed from datebase
        //setPlants([...plants, values]);
        setUpdate(!update);
      } catch (error) {
        console.error("Post error: " + error);
      }
    })();
  };

  const PlantListPutCallback = (values) => {
    (async () => {
      try {
        await ky.put(`/plants/${values.plant_id}`, {
          json: {
            name: values.name,
            description: values.description,
            price: values.price,
            image: values.image,
          },
        });
        setUpdate(!update);
      } catch (error) {
        console.error("Put error: " + error);
      }
    })();
  };

  const PlantListDeleteCallback = (id) => {
    (async () => {
      try {
        await ky.delete(`/plants/${id}`);
        setUpdate(!update);
      } catch (error) {
        console.error("Delete error: " + error);
      }
    })();
  };

  const CardList = () => {
    return plants.map((item) => (
      <Col sm='12' md='3'>
        <PlantCard
          key={item.plant_id}
          {...item}
          PlantListPutCallback={PlantListPutCallback}
          PlantListDeleteCallback={PlantListDeleteCallback}
        />
      </Col>
    ));
  };

  return (
    <Fragment>
      <Row>
        <Col sm='12'>
          <PlantForm PlantListPostCallback={PlantListPostCallback} />
        </Col>
      </Row>
      <Row>
        <CardList />
      </Row>
    </Fragment>
  );
};

export default PlantList;
