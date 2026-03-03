import { useState } from "react";
import "./index.css";
import Flex from "../../atom/Flex";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Flex className="navbar" justify="space-between" align="center">
      <div className="nav-logo">Logo App</div>

      <Flex className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="about">About</a>
        <a href="services">Services</a>
        <a href="contact">Contact</a>
      </Flex>

      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </Flex>
  );
};

export default Navbar;
