import "../contact/Contact.css";
import "../contact/Contact-responsive.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebook } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { BiSolidCommentError } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { getDatabase, ref, set, push } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  let [text, setText] = useState("");
  let [texterror, setTextError] = useState("");
  let [email, setEmail] = useState("");
  let [emailerror, setEmailError] = useState("");
  let [whatsapp, setWhatsapp] = useState("");
  let [whatsapperror, setWhatsappError] = useState("");
  let [massage, setMassage] = useState("");
  let [felluperror, setFellupError] = useState("");
  let [massageerror, setMassageError] = useState("");
  const notify = () => toast("successful!");

  let handleText = (e) => {
    setText(e.target.value);
    setTextError("");
  };
  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  let handleWhatsapp = (e) => {
    setWhatsapp(e.target.value);
    setWhatsappError("");
  };
  let handleMassage = (e) => {
    setMassage(e.target.value);
    setMassageError("");
  };
  let handleSubmeet = () => {
    if (!text && !email && !whatsapp && !massage) {
      setTextError("name is required");
      setEmailError("email is required");
      setWhatsappError("WhatsApp number is required");
      setMassageError("please write your message");
      text("");
    } else {
      if (text && email && whatsapp && massage) {
        const db = getDatabase();
        set(push(ref(db, "contact/")), {
          username: text,
          email: email,
          whatsappNumber: whatsapp,
          message: massage,
        }).then(() => {
          setText("");
          setEmail("");
          setWhatsapp("");
          setMassage("");
          notify();
        });
      } else {
        setMassageError("Sorry you did not complete the complete form");
      }
    }
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <section id="contact">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} sm={12} md={12}>
              <div className="input-box">
                <input
                  onChange={handleText}
                  type="text"
                  placeholder="Your name"
                  value={text}
                />
                {texterror && (
                  <h1 className="error">
                    {texterror} <BiSolidCommentError className="erricon" />
                  </h1>
                )}
                <input
                  onChange={handleEmail}
                  type="email"
                  placeholder="Email"
                  value={email}
                />
                {emailerror && (
                  <h1 className="error">
                    {emailerror} <BiSolidCommentError className="erricon" />
                  </h1>
                )}
                <input
                  onChange={handleWhatsapp}
                  type="text"
                  placeholder="Your WhatsApp number"
                  value={whatsapp}
                />
                {whatsapperror && (
                  <h1 className="error">
                    {whatsapperror} <BiSolidCommentError className="erricon" />
                  </h1>
                )}
                <input
                  value={massage}
                  onChange={handleMassage}
                  className="msg"
                  type="email"
                  placeholder="How can I help?*"
                />
                {massageerror && (
                  <h1 className="error">
                    {massageerror} <BiSolidCommentError className="erricon" />
                  </h1>
                )}
                <Row>
                  <Col lg={6} sm={12} md={12}>
                    <button onClick={handleSubmeet} className="contact-btn">
                      Get In Touch
                    </button>
                  </Col>
                  <Col
                    lg={6}
                    sm={12}
                    md={12}
                    className="d-flex justify-content-end"
                  >
                    <div className="contact-i">
                      <div className="c-box">
                        <a
                          href="https://www.facebook.com/towsif.hridoy.12?mibextid=ZbWKwL"
                          target="blank"
                        >
                          <FaFacebook className="ci" />
                        </a>
                      </div>
                      <div className="c-box">
                        <a href="https://wa.link/2jsd5a" target="blank">
                          <FaSquareWhatsapp className="ci" />
                        </a>
                      </div>
                      <div className="c-box">
                        <a
                          href="https://www.linkedin.com/in/saykhul-alam-25a1312a8"
                          target="blank"
                        >
                          <FaLinkedin className="ci" />
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
                <h2>{felluperror}</h2>
              </div>
            </Col>
            <Col lg={6} sm={12} md={12}>
              <div className="text-side">
                <h2>
                  Let’s <span>talk</span> for <br /> Something special
                </h2>
                <p>
                  I seek to push the limits of creativity to create
                  high-engaging, <br /> user-friendly, and memorable interactive
                  experiences.
                </p>
                <h3>
                  <MdEmail className="email" />
                  saykhulalam@gmail.com
                </h3>
                <h4>
                  <IoCall className="call" />
                  01966266966
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
