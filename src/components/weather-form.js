import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const WeatherForm = (props) => {
  const { setCity } = props;
  const [inputs, setInputs] = useState();

  const handleSubmit = (event) => {
    setCity(inputs);
    event.preventDefault();
  };

  return (
    <div>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Control
            type="text"
            placeholder="Enter city name"
            name="city"
            onChange={(e) => setInputs(e.target.value)}
          />
          <Form.Text className="text-muted">
            Enter the city name you want to see the weather information
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default WeatherForm;
