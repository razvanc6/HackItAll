import React, { useState } from "react";
import { Modal, Button, Carousel, ListGroup, Form } from "react-bootstrap";
import ReplyModal from "./ReplyModal";
import { FaRegCommentDots } from "react-icons/fa"; // Importing a comment icon
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; // Importing heart icons

const PostModal = ({ show, handleClose, post }) => {
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);
  const [likedComments, setLikedComments] = useState({}); // Track liked state for each comment

  const handleOpenReply = (comment) => {
    setSelectedComment(comment);
    setShowReplyModal(true);
  };

  const handleCloseReply = () => {
    setSelectedComment(null);
    setShowReplyModal(false);
  };

  const toggleLike = (index) => {
    setLikedComments((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the like state
    }));
  };

  return (
    <>
      {/* Main Modal */}
      <Modal show={show} onHide={handleClose} size="xl" centered>
        <Modal.Header>
          <Modal.Title>{post.title}</Modal.Title>
          <Button
            variant="link"
            onClick={handleClose}
            style={{ textDecoration: "none", fontSize: "1.5rem" }}
            className="ms-auto"
          >
            &times;
          </Button>
        </Modal.Header>
        <Modal.Body className="d-flex">
          {/* Left: Carousel */}
          <div style={{ flex: 1 }}>
            <Carousel>
              {post.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="d-block w-100"
                    style={{ maxHeight: "500px", objectFit: "cover" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          {/* Right: Post Info */}
          <div
            style={{
              flex: 1,
              paddingLeft: "20px",
              maxHeight: "500px",
              overflowY: "auto",
            }}
          >
            {/* Description */}
            <p>{post.description}</p>

            {/* Comments Section */}
            <ListGroup variant="flush">
              {post.comments.map((comment, index) => (
                <ListGroup.Item
                  key={index}
                  className="d-flex flex-column"
                  style={{
                    fontSize: "0.9rem",
                    borderBottom: "1px solid #ddd",
                    paddingBottom: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <strong>{comment.user}</strong>
                    <div
                      className="d-flex align-items-center"
                      style={{ cursor: "pointer" }}
                      onClick={() => toggleLike(index)}
                    >
                      {likedComments[index] ? (
                        <AiFillHeart size={20} color="red" />
                      ) : (
                        <AiOutlineHeart size={20} />
                      )}
                      <span style={{ marginLeft: "5px" }}>{comment.upvotes}</span>
                    </div>
                  </div>
                  <div
                    style={{
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                    }}
                  >
                    {comment.text}
                  </div>
                  <div
                    className="d-flex align-items-center mt-1"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleOpenReply(comment)}
                  >
                    <FaRegCommentDots size={18} style={{ marginRight: "5px" }} />
                    <span>{comment.replies ? comment.replies.length : 0} Replies</span>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>

            {/* Add a Comment */}
            <Form className="mt-3">
              <Form.Group>
                <Form.Control type="text" placeholder="Add a comment..." />
              </Form.Group>
              <Button variant="primary" className="mt-2">
                Post
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>

      {/* Reply Modal */}
      {selectedComment && (
        <ReplyModal
          show={showReplyModal}
          handleClose={handleCloseReply}
          comment={selectedComment}
        />
      )}
    </>
  );
};

export default PostModal;
