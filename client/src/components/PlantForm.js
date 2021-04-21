import React, {useState, Fragment} from "react";
import PlantInput from "./PlantInput";

import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

const PlantForm = ({PlantListPostCallback}) => {
  const [open, setOpen] = useState(false);

  const PlantFormCallback = (values) => PlantListPostCallback(values);

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
          <PlantInput
            PlantFormCallback={PlantFormCallback}
            data={{
              name: "",
              description: "",
              price: "",
              image: "",
            }}
          />
        </div>
      </Collapse>
    </Fragment>
  );
};

export default PlantForm;
