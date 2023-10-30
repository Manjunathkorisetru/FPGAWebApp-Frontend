import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Post.css";
import axios from "axios";

function Post() {
  const [input, setInput] = useState({
    series: "",
    device: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const newNote = {
      series: input.series,
      device: input.device,
    };
    axios.post(
      "https://mysterious-galoshes-moth.cyclic.app/fpga/create",
      newNote
    );
  }

  return (
    <div class="container">
      <h1>Welcome to the Intel post page </h1>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="series">
          <Form.Label column sm="2">
            Series
          </Form.Label>
          <Col sm="3">
            <Form.Control
              onChange={handleChange}
              name="series"
              placeholder="series name"
              value={input.series}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="device">
          <Form.Label column sm="2">
            Device
          </Form.Label>
          <Col sm="3">
            <Form.Control
              onChange={handleChange}
              name="device"
              placeholder="device name"
              value={input.device}
            />
          </Col>
        </Form.Group>
        <Button onClick={handleClick} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Post;
