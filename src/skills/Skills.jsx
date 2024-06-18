import "../skills/Skills.css";
import "../skills/Skill-responsive.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoLogoJavascript } from "react-icons/io5";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3 } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiTailwindcss } from "react-icons/si";
import { BiSolidDevices } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { SiNetlify } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <Container>
          <div className="taitel">
            <h2>
              My <span>Skills</span>
            </h2>
          </div>
          <Row className="frist">
            <Col lg={3} sm={12} md={6}>
              <div className="main">
                <div className="pad">
                  <IoLogoJavascript className="skill-i" />
                  <h3>javascript</h3>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={12} md={6}>
              <div className="main">
                <div className="pad">
                  <ImHtmlFive className="skill-i" />
                  <h3>html-5</h3>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={12} md={6}>
              <div className="main">
                <div className="pad">
                  <FaCss3 className="skill-i" />
                  <h3>css</h3>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={12} md={6}>
              <div className="main">
                <div className="pad">
                  <FaGithubSquare className="skill-i" />
                  <h3>git-hub</h3>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="socend">
            <Col lg={3} sm={12} md={6}>
              <div className="main">
                <div className="pad">
                  <FaBootstrap className="skill-i" />
                  <h3>bootstrap</h3>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={12} md={6}>
              <div className="main">
                <div className="pad">
                  <FaReact className="skill-i" />
                  <h3>react</h3>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={12} md={6}>
              <div className="main">
                <div className="pad">
                  <FiFigma className="skill-i" />
                  <h3>figma-html</h3>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={12} md={6}>
              <div className="main">
                <div className="pad">
                  <SiTailwindcss className="skill-i" />
                  <h3>tailwind</h3>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="socend">
            <Col lg={3} sm={12} md={6}>
              <Col>
                <div className="main">
                  <div className="pad">
                    <BiSolidDevices className="skill-i" />
                    <h3>device responsive</h3>
                  </div>
                </div>
              </Col>
            </Col>
            <Col lg={3} sm={12} md={6}>
              <Col>
                <div className="main">
                  <div className="pad">
                    <IoLogoFirebase className="skill-i" />
                    <h3>firebase</h3>
                  </div>
                </div>
              </Col>
            </Col>
            <Col lg={3} sm={12} md={6}>
              <Col>
                <div className="main">
                  <div className="pad">
                    <SiNetlify className="skill-i" />
                    <h3>netlify</h3>
                  </div>
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Skills;
