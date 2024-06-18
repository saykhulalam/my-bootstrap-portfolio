import "../nav/Navegation.css";
import "../nav/Nave-responsive.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FiDownload } from "react-icons/fi";
import resume from '../assets/resume.pdf'

const Navegation = () => {
  return (
    <>
      <Navbar expand="lg" className="navegation">
        <Container>
          <Navbar.Brand href="#">
            <h2>Saykhul-alam</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link className="li" href="#about">
                About Me
              </Nav.Link>
              <Nav.Link className="li" href="#skills">
                Skills
              </Nav.Link>
              <Nav.Link className="li" href="#project">
                Project
              </Nav.Link>
              <Nav.Link className="li" href="#contact">
                Contact me
              </Nav.Link>
            </Nav>
            <div className="navbtn">
              <a href={resume} download="saykhul-alam-resume.pdf">
                Resume
                <FiDownload className="navicon" />
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegation;
