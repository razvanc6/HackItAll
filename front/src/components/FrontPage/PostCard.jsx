import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const PostCard = ({ title, description, images, upvotes, comments }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [upvoteCount, setUpvoteCount] = useState(upvotes);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleUpvote = () => {
    setUpvoteCount(upvoteCount + 1);
  };

  const mostUpvotedComment = comments.reduce(
    (max, comment) => (comment.upvotes > max.upvotes ? comment : max),
    comments[0]
  );

  return (
    <Card className="mb-4" style={{ width: "100%", maxWidth: "800px", margin: "auto" }}>
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Text className="text-center">{description}</Card.Text>
      </Card.Body>
      <Card.Img
        variant="top"
        src={images[currentImageIndex]}
        style={{ maxHeight: "400px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex justify-content-between align-items-center">
        <Button variant="outline-primary" onClick={handleUpvote}>
          Upvote
        </Button>
        <span>{upvoteCount} Upvotes</span>
        <Button variant="secondary" onClick={handleNextImage}>
          Next Image
        </Button>
      </Card.Body>
      <Card.Body>
        <div className="mb-2">
          <span>{comments.length} Comments</span>
        </div>
        <div>
          <strong>Most Upvoted Comment:</strong>
          <p>{mostUpvotedComment.text}</p>
        </div>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
