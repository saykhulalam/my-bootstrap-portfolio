import "../porjects/Project.css";
import '../porjects/Project-responsive.css'
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import projectimgone from "../assets/project-1.png";
import projectimgtow from "../assets/project-2.png";
import projectimgthree from "../assets/project-3.png";

const Project = () => {
  return (
    <>
      <section id="project">
        <Container>
          <div className="taitel">
            <h2>
              My <span>Projects</span>
            </h2>
          </div>
          <Row className="top">
            <Col lg={6} sm={12} md={12}>
              <img className="w-100" src={projectimgone} alt="project-img-1" />
            </Col>
            <Col lg={6} sm={12} md={12}>
              <div className="text-areya">
                <h2>01</h2>
                <h3>gaming website</h3>
                <p>
                This is a gaming website. It is built using HTML CSS Bootstrap framework and it is device responsive. Check out the demo by clicking the GitHub link button below.
                </p>
                <a href="https://saykhulalam.github.io/hancok-projact/" target="_blank">GitHub link</a>
              </div>
            </Col>
          </Row>
          <Row className="top">
            <Col lg={6} sm={12} md={12}>
              <div className="text-areya">
                <h2>02</h2>
                <h3>travelling website</h3>
                <p>
                This is a travelling website. It is built using HTML CSS Bootstrap framework and it is device responsive. Check out the demo by clicking the GitHub link button below.
                </p>
                <a href="https://saykhulalam.github.io/highking.responsive/" target="_blank">GitHub link</a>
              </div>
            </Col>
            <Col lg={6} sm={12} md={12}>
              <img className="w-100" src={projectimgtow} alt="project-img-2" />
            </Col>
          </Row>
          <Row className="top">
            <Col lg={6} sm={12} md={12}>
            <img className="w-100" src={projectimgthree} alt="project-img-3" />
            </Col>
            <Col lg={6} sm={12} md={12}>
              <div className="text-areya">
                <h2>03</h2>
                <h3>dentist website</h3>
                <p>
                This is a dentist website. It is built using HTML CSS Bootstrap framework and it is device responsive. Check out the demo by clicking the GitHub link button below.
                </p>
                <a href="https://saykhulalam.github.io/logoipsome-projact/" target="_blank">GitHub link</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Project;
