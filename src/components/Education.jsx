import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Education() {
  const education = [
    {
      degree: 'Bachelor of Science (B.S.) - Information System',
      institution: 'Addis Ababa University',
      duration: '2022 - Present',
    },
    {
      degree: 'Bachelor of Arts (B.A.) - Business Management',
      institution: 'Admas University',
      duration: '2024 - Present',
    },
  ];

  return (
    <section id="education" className="education-section">
      <div data-aos="fade-up" data-aos-duration="1000">
        <Container>
          <h2 className="section-title"style={{ fontFamily: 'Playfair Display, serif' }}>Education</h2>
          <Row>
            {education.map((edu, index) => (
              <Col md={6} key={index} className="mb-4">
                <Card className="shadow-sm border-0 allCard">
                  <Card.Body>
                    <Card.Title className="text-primary fw-bold">{edu.degree}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{edu.institution}</Card.Subtitle>
                    <Card.Text>{edu.duration}</Card.Text>
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

export default Education;
