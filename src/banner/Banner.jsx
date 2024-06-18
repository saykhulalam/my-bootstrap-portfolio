import "../banner/Banner.css";
import "../banner/Banner-responsive.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebook } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import bannerimg from "../assets/bannerimg.png";

const Banner = () => {
  return (
    <>
      <section id="banner">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} sm={12}>
              <div className="textareya">
                <h1>
                  <span className="patla">Hello I’am</span> Saykhul Frontend{" "}
                  <span className="dv">Developer</span>{" "}
                  <span className="patla">Based In</span> Bangladesh.
                </h1>
                <p>
                  "I am Saikhul Alam, a front-end web developer. I am
                  enthusiastic about new technologies and proactive. Through my
                  work, I can help solve others' problems and am eager to work
                  on new and challenging projects." .
                </p>
              </div>
              <div className="banneri">
                <div className="b-box">
                  <a
                    href="https://www.facebook.com/towsif.hridoy.12?mibextid=ZbWKwL"
                    target="blank">
                    <FaFacebook className="bi" />
                  </a>
                </div>
                <div className="b-box">
                  <a href="https://wa.link/2jsd5a" target="blank">
                    <FaSquareWhatsapp className="bi" />
                  </a>
                </div>
                <div className="b-box">
                  <a
                    href="https://www.linkedin.com/in/saykhul-alam-25a1312a8"
                    target="blank"
                  >
                    <FaLinkedin className="bi" />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6} sm={12} className="d-flex justify-content-end">
              <img className="bannerimg" src={bannerimg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Banner;
