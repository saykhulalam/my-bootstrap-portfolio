import '../footer/Footer.css'
import '../footer/Footer-responsive.css'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <>
      <section id='footer'>
        <Container>
            <div className="main-f">
            <Row>
                <Col lg={6} sm={12}>
                <h2>Saykhul-alam</h2>
                </Col>
                <Col lg={6} sm={12}>
                    <div className="copy">
                        <h3>@ 3/7/2024 Personal</h3>
                        <h4>Made In saykhul</h4>
                    </div>
                </Col>
            </Row>
            </div>
        </Container>
      </section>
    </>
  )
}

export default Footer
