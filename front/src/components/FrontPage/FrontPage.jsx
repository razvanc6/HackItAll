import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PostCard from "./PostCard";
import Navbar from "./Navbar";

const FrontPage = () => {
  const posts = [
    { 
      id: 1,
      userName:"Alex",
      title: "Historical Monument",
      description: "A beautiful view of a historical site.dsadasdasdsadasdas dasdasd safhvsj asfasoF HSDFSDHVBHKSD V DFHDS SJ OUVADIFUDASINHFISDAIUBDS IDSHJFBDSJFDJFDSG HF JAFBDSHK FDS HDF SDH VHSD FDSH FDSH FDSHV SDJGSDJHG DDSADPKJASF FSDA FAG FHA JHAD GFDA GAF GVHSA VJFD FHJVF VJHF AVHJSF VHFA VJHAFS VHJF SAVF DAVH FAV HJ FJV JHFD VJHADF VA VSFnvs djklv JDS jvlsl jkVs jkl  ",
      images: [
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400?text=Second+Image",
      ],
      upvotes: 120,
      comments: [
        { text: "Amazing place dsdnasdihbsdbvfhagbashg s FSDPIH VHPSFV PDFV DFV HISD vjhpsv hs vpihS VF VHhv hv hshv!", upvotes: 15 },
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
    {/* Use NavBar Component */}
    <Navbar />

      {/* Sidebar and Main Content */}
      <div className="d-flex" style={{ marginTop: "60px" }}>
        {/* Sidebar */}
        <div
          className="bg-dark text-white"
          style={{
            width: "200px",
            minHeight: "100vh",
            position: "fixed",
            top: "0",
            left: "0",
          }}
        >
          <ul className="nav flex-column p-3">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Favorites
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/map">
                Map
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <Container fluid className="p-3" style={{ marginTop: "60px" }}>
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
  );
};

export default FrontPage;
