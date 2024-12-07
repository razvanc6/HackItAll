import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const PostPage = () => {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const fetchLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // Replace YOUR_API_KEY with your actual Google Maps API key
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`
          );
          const data = await response.json();

          if (data.status === "OK") {
            const city = data.results[0].address_components.find((component) =>
              component.types.includes("locality")
            )?.long_name;

            if (city) {
              setLocation(city);
            } else {
              setError("Unable to find city from your location.");
            }
          } else {
            setError("Failed to fetch location data.");
          }
        } catch (error) {
          setError("An error occurred while fetching location data.");
        }
      },
      (error) => {
        setError("Unable to retrieve your location.");
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Post Details:", { description, location, images });
    // Implement logic to send the data to the backend
  };

  return (
    <Container className="mt-5">
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
          <div className="d-flex">
            <Form.Control
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
            />
            <Button
              variant="outline-secondary"
              className="ms-2"
              onClick={fetchLocation}
            >
              Use Current Location
            </Button>
          </div>
          {error && <small className="text-danger">{error}</small>}
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
  );
};

export default PostPage;
