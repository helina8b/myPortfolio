import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Certificates() {
  const certificates = [
    'FrontEnd Web Development',
    'Data Science and Analytics',
    'Programming Fundamentals',
  ];

  return (
    <section id="certificates" className="certificate-section">
      <div data-aos="fade-up" data-aos-duration="1000">
        <Container>
          <h2 className="section-title"style={{ fontFamily: 'Playfair Display, serif' }}>Certificates</h2>
          <Row>
            {certificates.map((cert, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="shadow-sm border-0 text-center allCard">
                  <Card.Body>
                    <Card.Title className="text-primary fw-bold">{cert}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Certificates;
