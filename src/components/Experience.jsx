import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Experience() {
  const experiences = [
    {
      role: 'Project Manager (Internship)',
      company: 'WeyTech',
      duration: '2024 - Present',
      details: [
        'Developed visually appealing and intuitive user interfaces.',
        'Designed interactive elements and animations.',
        'Collaborated with cross-functional teams.',
        'Proficient in using Figma software.',
      ],
    },
    {
      role: 'UX/UI Designer (Internship)',
      company: 'Delta Rabbit',
      duration: '2023 - 2024',
      details: [
        'Developed user interfaces aligning with brand guidelines.',
        'Designed interactive elements to improve user engagement.',
        'Worked closely with product managers and developers.',
        'Proficient in using Figma software.',
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section py-5" data-aos="fade-up" data-aos-duration="1200">
      <Container>
        <h2 className="section-title text-center mb-5 text-white"style={{ fontFamily: 'Playfair Display, serif' }}>Experience</h2>
        <Row>
          {experiences.map((exp, index) => (
            <Col md={6} key={index}>
              <Card className="shadow-lg border-0 mb-4 experience-card allCard">
                <Card.Body>
                  <Card.Title className="text-primary fw-bold">{exp.role}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{exp.company} | {exp.duration}</Card.Subtitle>
                  <ul className="text-secondary">
                    {exp.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
