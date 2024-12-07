import React from "react";
import { Nav } from "react-bootstrap";

const BurgerMenu = () => {
  return (
    <Nav className="flex-column text-start px-3">
      <Nav.Link href="#" className="text-white py-2">Home</Nav.Link>
      <Nav.Link href="#" className="text-white py-2">Categories</Nav.Link>
      <Nav.Link href="#" className="text-white py-2">Favorites</Nav.Link>
      <Nav.Link href="#" className="text-white py-2">Settings</Nav.Link>
    </Nav>
  );
};

export default BurgerMenu;
