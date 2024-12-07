import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PostCard from "./PostCard";

const MainPage = () => {
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
      {/* Header */}
      <Container fluid className="bg-dark text-white py-2 fixed-top">
        <Row className="align-items-center">
          {/* Sidebar Title */}
          <Col md={2} className="ps-4" style={{ paddingRight: "150px" }}>
            <strong>Menu Title</strong>
          </Col>
  
          {/* Page Title */}
          <Col md={6}>
            <h2 className="text-center mb-0" style={{ paddingLeft: "450px" }}>
              Hot News
            </h2>
          </Col>
  
          {/* User Info */}
          <Col md={4} className="d-flex justify-content-end align-items-center">
            <input
              type="search"
              className="form-control me-2"
              placeholder="Search"
              style={{ maxWidth: "200px" }}
            />
            <div className="text-end me-3">
              <strong>John Doe</strong>
              <br />
              <span>$ 1234</span>
            </div>
            <img
              src="https://via.placeholder.com/40"
              alt="Avatar"
              className="rounded-circle"
            />
          </Col>
        </Row>
      </Container>
  
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
              <a className="nav-link text-white" href="#">
                Settings
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

export default MainPage;
