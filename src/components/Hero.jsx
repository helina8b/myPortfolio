import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import heroBg from '../assets/hero-bg.jpg'; 

function Hero() {
  return (
    <section
      id="home"
      className="hero-section text-white text-center d-flex align-items-center justify-content-center"
      style={{
        height: '100vh',
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed' 
      }}
      data-aos="fade-in"
      data-aos-duration="1200"
    >
      <Container>
        <Row>
          <Col>
            <h1 className="display-3 fw-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
              Hi, I'm Helina Beneberu
            </h1>
            <p className="lead fs-4 mt-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Freelancer
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
