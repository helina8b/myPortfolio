import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Languages() {
  const languages = ['English – Fluent', 'Amharic – Native'];

  return (
    <section id="languages" className="lang-section">
      <div data-aos="fade-up" data-aos-duration="1000">
        <Container>
          <h2 className="section-title" style={{ fontFamily: 'Playfair Display, serif' }}>Languages</h2>
          <Row>
            <Col md={6}>
              <ul className="language-list">
                {languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Languages;
