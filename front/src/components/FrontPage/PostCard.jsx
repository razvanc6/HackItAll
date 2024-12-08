import React, { useState, useEffect } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import PostModal from "./PostModal";
import { AiOutlineHeart } from "react-icons/ai"; // Import heart icon
import axios from "axios"; // Asigură-te că ai axios instalat pentru a face request-uri

const PostCard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [currentUpvotes, setCurrentUpvotes] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Fetch posts from the API when the component is mounted
    axios
      .get("http://localhost:5000/api/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading posts...</div>;
  }

  // Functia care manevrează click-ul pe like
  const handleLikeClick = async (postId) => {
    try {
      const newLikedStatus = !liked;
      setLiked(newLikedStatus); // Actualizează statusul local

      // Actualizează numărul de upvotes în funcție de like
      const updatedUpvotes = newLikedStatus
        ? currentUpvotes + 1
        : currentUpvotes - 1;
      setCurrentUpvotes(updatedUpvotes);

      // Trimite request pentru a actualiza like-ul în baza de date
      await axios.post("http://localhost:5000/api/likes/toggle-like", {
        userId: localStorage.getItem("userId"), // Obținem userId din localStorage
        postId,
        liked: newLikedStatus,
      });
    } catch (error) {
      console.error("Eroare la toggle like", error);
    }
  };

  // Funcțiile pentru modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSelect = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };

  return (
    <>
      {posts.map((post) => (
        <Card
          className="mb-4"
          key={post._id}
          style={{ width: "100%", maxWidth: "800px", margin: "auto" }}
        >
          {/* Header: User Info and Location */}
          <Card.Header>
            <Row className="align-items-center">
              <Col xs="auto">
                <strong>{post.userId}</strong>{" "}
                {/* Folosește userId-ul sau username-ul înlocuit */}
              </Col>
              <Col className="text-end">
                <strong>Location:</strong> {post.location || "N/A"}
              </Col>
            </Row>
          </Card.Header>

          {/* Description */}
          <Card.Body>
            <Card.Text>
              {post.description.length > 100 && !isExpanded
                ? `${post.description.substring(0, 100)}...`
                : post.description}
              {!isExpanded && post.description.length > 100 && (
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
          {post.images && (
            <Carousel
              activeIndex={carouselIndex}
              onSelect={handleSelect}
              indicators={false}
            >
              {post.images.map((image, index) => (
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
          )}

          {/* Likes and Highlighted Comment */}
          <Card.Body className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <AiOutlineHeart
                size={24}
                style={{ cursor: "pointer", color: liked ? "red" : "gray" }}
                onClick={() => handleLikeClick(post._id)} // Pass postId for toggle
              />
              <span>{currentUpvotes}</span>
            </div>
            {post.comments && post.comments.length > 0 && (
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
                "{post.comments[0].text}"
              </div>
            )}
          </Card.Body>

          {/* Footer: Date and Status */}
          <Card.Body className="d-flex justify-content-between align-items-center">
            <div className="text-muted">
              Posted on: {new Date(post.createdAt).toLocaleDateString()}
            </div>
            <div className="text-end">
              <strong>{post.approved ? "Approved" : "Pending"}</strong>
            </div>
          </Card.Body>
        </Card>
      ))}

      {/* Modal */}
      <PostModal
        show={showModal}
        handleClose={handleCloseModal}
        post={posts[0]}
      />
    </>
  );
};

export default PostCard;
