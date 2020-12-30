import React from "react";
import { Form, Button } from "react-bootstrap";

const Step2Form = ({ props: { HandleStep } }) => {
  return (
    <div>
      <Form onSubmit={HandleStep}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter info2</Form.Label>
          <Form.Control type="text" placeholder="Enter info2" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Enter info2</Form.Label>
          <Form.Control type="text" placeholder="Enter info2" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Step2Form;
