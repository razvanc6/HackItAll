import React from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";

const Navbar = () => {
  return (
    <Container
      fluid
      className="bg-dark text-white py-2 fixed-top"
      style={{ zIndex: 1000 }}
    >
      <Row className="align-items-center">
        {/* Sidebar Title */}
        <Col xs={4} md={2} className="text-start">
          <strong>Menu Title</strong>
        </Col>

        {/* Page Title */}
        <Col xs={4} md={6} className="text-center">
          <h2 className="mb-0" style={{ fontSize: "1.5rem" }}>
            Hot News
          </h2>
        </Col>

        {/* Search Bar and User Info */}
        <Col xs={4} md={4} className="d-flex justify-content-end align-items-center">
          {/* Search Bar */}
          <InputGroup className="me-2 d-none d-md-flex" style={{ maxWidth: "200px" }}>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="form-control"
            />
          </InputGroup>

          {/* User Info */}
          <div className="d-flex align-items-center">
            {/* User Details */}
            <div className="d-none d-md-block text-end me-3">
              <strong>John Doe</strong>
              <br />
              <span>$ 1234</span>
            </div>
            {/* Avatar */}
            <img
              src="https://via.placeholder.com/40"
              alt="Avatar"
              className="rounded-circle"
            />
          </div>
        </Col>
      </Row>

      {/* Responsive Search Bar for Small Screens */}
      <Row className="d-md-none mt-2">
        <Col xs={12}>
          <InputGroup>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="form-control"
            />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;