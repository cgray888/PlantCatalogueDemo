import React from "react";
import * as yup from "yup";
import {Formik} from "formik";
import PropTypes from "prop-types";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const schema = yup.object({
  name: yup
    .string()
    .trim()
    .min(1, "Your name must be at least 1 character.")
    .max(100, "Your name cannot be more than 100 characters.")
    .matches(
      /[A-Za-z]{1,}/,
      "Invalid name. Use Upper or Lowercase letters only.",
    )
    .required("A name is required."),
  description: yup
    .string()
    .trim()
    .min(1, "Your description must be at least 1 character.")
    .max(255, "Your description must be no more than 255 characters.")
    .required("A description is required."),
  price: yup
    .string()
    .trim()
    .min(1, "Your price must be at least 1 digit.")
    .max(9999, "Your price must be no more than 9999.")
    .matches(/^\d+$/, "Invalid price. Integer only.")
    .required("A price is required."),
  image: yup
    .string()
    .trim()
    .max(255, "Your image src must be no more than 255 characters.")
    .required("An image is required."),
});

const PlantInput = ({data, PlantFormCallback}) => {
  PlantInput.propTypes = {
    data: PropTypes.object,
    PlantFormCallback: PropTypes.func,
  };

  const handlePlantFormData = (values, actions) => {
    values.plant_id = data.plant_id;
    PlantFormCallback(values);
    actions.setSubmitting(false);
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handlePlantFormData}
      initialValues={{
        name: data.name,
        description: data.description,
        price: data.price,
        image: data.image,
      }}
    >
      {
        // Form is passed to Formik as a function
        ({handleSubmit, handleChange, handleBlur, values, touched, errors}) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group controlId='name'>
                  <Form.Control
                    placeholder='Name'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.name && !errors.name}
                    isInvalid={touched.name && errors.name}
                  ></Form.Control>
                  <Form.Control.Feedback type='invalid'>
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='description'>
                  <Form.Control
                    placeholder='Description'
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.description && !errors.description}
                    isInvalid={touched.description && errors.description}
                  ></Form.Control>
                  <Form.Control.Feedback type='invalid'>
                    {errors.description}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId='price'>
                  <Form.Control
                    placeholder='Price'
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.price && !errors.price}
                    isInvalid={touched.price && errors.price}
                  ></Form.Control>
                  <Form.Control.Feedback type='invalid'>
                    {errors.price}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='image'>
                  <Form.Control
                    placeholder='Image'
                    value={values.image}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.image && !errors.image}
                    isInvalid={touched.image && errors.image}
                  ></Form.Control>
                  <Form.Control.Feedback type='invalid'>
                    {errors.image}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Button size='sm' type='submit'>
              Submit
            </Button>
          </Form>
        )
      }
    </Formik>
  );
};

export default PlantInput;
