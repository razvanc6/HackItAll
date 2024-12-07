import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ReplyModal = ({ show, handleClose, comment }) => {
  const [replyText, setReplyText] = useState("");

  const handlePostReply = () => {
    // Logic to post the reply to the database or state
    console.log(`Reply posted: ${replyText}`);
    setReplyText(""); // Clear the input
  };

  return (
    <Modal show={show} onHide={handleClose} size="md" centered>
      <Modal.Header>
        <Modal.Title>Reply to Comment</Modal.Title>
        <Button variant="link" onClick={handleClose}>
          <span aria-hidden="true">&times;</span>
        </Button>
      </Modal.Header>
      <Modal.Body>
        {/* Parent Comment */}
        <div className="mb-3">
          <strong>Comment:</strong>
          <p>{comment.text}</p>
        </div>

        {/* Replies Section */}
        <div
          style={{
            maxHeight: "300px",
            overflowY: "auto",
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          {comment.replies && comment.replies.length > 0 ? (
            comment.replies.map((reply, idx) => (
              <div key={idx} className="mb-3">
                <strong>{reply.user}</strong>
                <p>{reply.text}</p>
              </div>
            ))
          ) : (
            <p>No replies yet.</p>
          )}
        </div>

        {/* Add a Reply */}
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Add a reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            className="mt-2"
            onClick={handlePostReply}
          >
            Post Reply
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ReplyModal;
