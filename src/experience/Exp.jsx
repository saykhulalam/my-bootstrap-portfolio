import "../experience/Exp.css";
import '../experience/Exp-responsive.css'
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Exp = () => {
  return (
    <>
      <section id="exp">
        <Container>
          <div className="taitel">
            <h3>
              My <span>Experience</span>
            </h3>
          </div>
          <Row>
            <Col lg={12}>
              <div className="main-box">
                <p>
                  "I have three years of experience in front end development and
                  during this time I have developed various web applications and
                  websites. I have worked on extensive projects using HTML, CSS
                  and JavaScript hands-on. My projects have ranged from design
                  websites to animations to improve user experience. and
                  creating interactive functional pages.I am familiar with using
                  professional web development tools such as Bootstrap,
                  React.js, Tailwind CSS.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Exp;
