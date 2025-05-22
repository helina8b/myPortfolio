import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import helinaImg from '../assets/helina.jpg'; 

function About() {
  return (
    <section id="about" className="about-section" data-aos="fade-up" data-aos-duration="1000">
      <Container>
        <h2 className="section-title text-center mb-5"style={{ fontFamily: 'Playfair Display, serif' }}>About Me</h2>
        <Row className="align-items-center">
          <Col md={3} data-aos="fade-right" data-aos-delay="200" className="text-center mb-4 mb-md-0">
            <div className="about-image-container"><img
              src={helinaImg}
              alt="Helina Beneberu"
              className="about-image rounded-circle shadow"
              style={{ width: '250px', height: '250px', objectFit: 'cover' }}
            /></div>
          </Col>
          <Col md={9} data-aos="fade-left" data-aos-delay="400">
            <p>
              I am a dedicated and driven individual with a passion for continuous learning and growth. I bring a wealth of experience and expertise to any team. I thrive in fast-paced, dynamic environments and am adept at problem-solving and collaborating with others to achieve common goals.
            </p>
            <p>
              My commitment to excellence and my ability to adapt to new challenges make me a valuable asset to any organization. I am known for my exceptional communication skills, both in written and verbal form, which allows me to effectively convey complex ideas and information.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;

