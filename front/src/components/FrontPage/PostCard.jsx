import React, { useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import PostModal from "./PostModal";
import { AiOutlineHeart } from "react-icons/ai"; // Import heart icon

const PostCard = ({ userName, title, description, location, images, upvotes, comments, status }) => {
  const [showModal, setShowModal] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSelect = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };

  const truncatedDescription =
    description.length > 100 && !isExpanded
      ? `${description.substring(0, 100)}...`
      : description;

  return (
    <>
      <Card className="mb-4" style={{ width: "100%", maxWidth: "800px", margin: "auto" }}>
        {/* Header: User Info and Location */}
        <Card.Header>
          <Row className="align-items-center">
            <Col xs="auto">
              <strong>{userName}</strong>
            </Col>
            <Col className="text-end">
              <strong>Location:</strong> {location}
            </Col>
          </Row>
        </Card.Header>

        {/* Description */}
        <Card.Body>
          <Card.Text>
            {truncatedDescription}
            {!isExpanded && description.length > 100 && (
              <Button
                variant="link"
                style={{ padding: 0 }}
                onClick={() => setIsExpanded(true)}
              >
                View More
              </Button>
            )}
            {isExpanded && (
              <Button
                variant="link"
                style={{ padding: 0 }}
                onClick={handleShowModal}
              >
                View Full Post
              </Button>
            )}
          </Card.Text>
        </Card.Body>

        {/* Carousel */}
        <Carousel activeIndex={carouselIndex} onSelect={handleSelect} indicators={false}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="d-block w-100"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Likes and Highlighted Comment */}
        <Card.Body className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <AiOutlineHeart size={20} style={{ marginRight: "5px" }} />
            <span>{upvotes}</span>
          </div>
          {comments.length > 0 && (
            <div
              style={{
                maxWidth: "80%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                cursor: "pointer",
                textAlign: "right",
                color: "blue",
              }}
              onClick={handleShowModal}
            >
              "{comments[0].text}"
            </div>
          )}
        </Card.Body>

        {/* Footer: Date and Status */}
        <Card.Body className="d-flex justify-content-between align-items-center">
          <div className="text-muted">Posted on: 2024-12-07</div>
          <div className="text-end">
            <strong>{status || "Active"}</strong>
          </div>
        </Card.Body>
      </Card>

      {/* Modal */}
      <PostModal
        show={showModal}
        handleClose={handleCloseModal}
        post={{ title, description, images, comments }}
      />
    </>
  );
};

export default PostCard;
