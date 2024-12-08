import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const FrontPage = () => {
  const posts = [
    {
      id: 1,
      userName: "Alex",
      title: "Historical Monument",
      description:
        "A beautiful view of a historical site.dsadasdasdsadasdas dasdasd safhvsj asfasoF HSDFSDHVBHKSD V DFHDS SJ OUVADIFUDASINHFISDAIUBDS IDSHJFBDSJFDJFDSG HF JAFBDSHK FDS HDF SDH VHSD FDSH FDSH FDSHV SDJGSDJHG DDSADPKJASF FSDA FAG FHA JHAD GFDA GAF GVHSA VJFD FHJVF VJHF AVHJSF VHFA VJHAFS VHJF SAVF DAVH FAV HJ FJV JHFD VJHADF VA VSFnvs djklv JDS jvlsl jkVs jkl",
      title: "Historical Monument",
      description: "A beautiful view of a historical site.",

      images: [
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400?text=Second+Image",
      ],
      upvotes: 120,
      comments: [
        { text: "Amazing place!", upvotes: 15 },
        { text: "Great picture!", upvotes: 25 },
        { text: "Looks so peaceful.", upvotes: 10 },
      ],
    },
    {
      id: 2,
      title: "City View",
      description: "The skyline during sunset.",
      images: [
        "https://via.placeholder.com/600x400?text=City+Image",
        "https://via.placeholder.com/600x400?text=Skyline",
      ],
      upvotes: 80,
      comments: [
        { text: "Incredible shot!", upvotes: 30 },
        { text: "I want to visit!", upvotes: 20 },
      ],
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Sidebar and Main Content */}
      <div
        className="d-flex"
        style={{
          paddingTop: "60px", // Ensures content starts below the Navbar
        }}
      >
        {/* Sidebar */}
        <div className="d-none d-md-block">
          <SideBar />
        </div>

        {/* Main Content */}
        <div
          className="flex-grow-1"
          style={{
            marginLeft: "150px", // Space for the Sidebar on medium+ screens
          }}
        >
          <Container fluid className="p-3">
            {posts.map((post) => (
              <Row key={post.id} className="mb-4">
                <Col>
                  <PostCard {...post} />
                </Col>
              </Row>
            ))}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
