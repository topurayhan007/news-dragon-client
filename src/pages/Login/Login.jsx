import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="mt-5">
      <h3 className="text-center  mb-3">Please Login</h3>
      <Form className="bg-light p-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </Form.Group>

        <div className="d-flex justify-content-center mt-4">
          <Button variant="dark" type="submit" className="w-100 rounded-1">
            Login
          </Button>
        </div>

        <div className="text-center mt-2">
          <Form.Text className="text-secondary">
            Don't Have an Account? <Link to="/register">Register</Link>
          </Form.Text>
        </div>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
