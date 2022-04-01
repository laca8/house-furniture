import React from "react";
import { Navbar, Container, Form, FormControl } from "react-bootstrap";
const Navb = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">WUZZUF</Navbar.Brand>
        <Navbar.Toggle />
        <Form className="d-flex justify-content-center">
          <FormControl
            type="search"
            placeholder="Search A Job"
            className="me-2"
            aria-label="Search"
          />
        </Form>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="/profile">Profile</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navb;
