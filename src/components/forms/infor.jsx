import React from "react";
import { Form, Button } from "react-bootstrap";

const Step1Form = ({ props: { HandleStep, errors, values, HandleChange } }) => {
  return (
    <div>
      <Form onSubmit={HandleStep}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="name"
            value={values.name}
            onChange={HandleChange}
          />
          {errors.name && (
            <Form.Text className="text-danger">{errors.name}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={values.email}
            onChange={HandleChange}
          />
          {errors.email && (
            <Form.Text className="text-muted">{errors.email}</Form.Text>
          )}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>DOB</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter dob"
            name="dob"
            value={values.dob}
            onChange={HandleChange}
          />
          {errors.dob && (
            <Form.Text className="text-muted">{errors.dob}</Form.Text>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Step1Form;
