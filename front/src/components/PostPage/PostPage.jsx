import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Navbar from "../FrontPage/Navbar.jsx";
import SideBar from "../FrontPage/SideBar.jsx";
const PostPage = () => {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Post Details:", { description, location, images });
    // Implement logic to send the data to the backend
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div style={{ marginLeft: "200px", paddingTop: "70px" }}>
        <Container>
          <h2>Create a New Post</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter post description"
              />
            </Form.Group>

            <Form.Group controlId="formLocation" className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Photos</Form.Label>
              <Form.Control type="file" multiple onChange={handleImageUpload} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit Post
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default PostPage;
