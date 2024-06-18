import "./About.css";
import './About-responsive.css'
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutimg from "../assets/aboutimg.png";

const About = () => {
  return (
    <>
      <section id="about">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} sm={12} md={12}>
              <img className="w-100" src={aboutimg} alt="" />
            </Col>
            <Col lg={6} sm={12} md={12}>
              <div className="text-side">
                <h2>
                  About <span>Me</span>
                </h2>
                <p>
                  "I am Saikhul Alam, a frontend web developer based in
                  Bangladesh. I am tech-savvy and creative individual who can
                  truly provide a unique experience in technology. I can easily
                  understand the needs of customers and adeptly apply it in
                  technology. I provide reliable and experienced web solutions
                  for all projects, ensuring stability and user experience as
                  per my clients' expectations. I am committed to assisting
                  those who need help with technological advancements, offering
                  them my exemplary service. I embrace caution and welcome all
                  necessary changes in the expansion of my projects. Being eager
                  to learn new technologies, I am always ready to deliver an
                  enhanced web assessment. If you're interested in working with
                  me, please feel free to contact me."
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
