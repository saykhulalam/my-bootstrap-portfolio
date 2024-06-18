import "../testimonial/Testimonial.css";
import "../testimonial/Testimonial-responsive.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import testimgone from "../assets/test-1.png";
import testimgtow from "../assets/test-2.png";
import testimgthree from "../assets/test-3.png";

const Testimonial = () => {
  return (
    <>
      <section id="testimonial">
        <Container>
          <div className="taitel">
            <h3>
              My <span>Testimonial</span>
            </h3>
          </div>
          <Row className="cardtest">
            <Col lg={4} sm={12} md={6}>
              <div className="main">
                <img className="testimg" src={testimgone} alt="" />
                <p>
                  Thank you I am very satisfied with your work. I will
                  definitely recommend you to my relatives.
                </p>
                <div className="shep"></div>
                <h4>Evren Shah</h4>
                <h5>Designer</h5>
              </div>
            </Col>
            <Col lg={4} sm={12} md={6}>
              <div className="main">
                <img className="testimg" src={testimgtow} alt="" />
                <p>
                  I like your service the most in my three years of agency
                  career. Your code quality is very good and organized.
                </p>
                <div className="shep"></div>
                <h4>Louis Andrews</h4>
                <h5>Designer</h5>
              </div>
            </Col>
            <Col lg={4} sm={12} md={6}>
              <div className="main last">
                <img className="testimg" src={testimgthree} alt="" />
                <p>
                  I am glad to work with you. It's hard to find good service at
                  such a low price these days. I am impressed by the quality of
                  your design
                </p>
                <div className="shep"></div>
                <h4>Hank author</h4>
                <h5>Designer</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Testimonial;
