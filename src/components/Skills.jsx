import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

function Skills() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'Project Management', level: 90 },
    { name: 'Technical Support', level: 85 },
    { name: 'PHP', level: 80 },
    { name: 'React', level: 80 },
    { name: 'Java Script', level: 85 },
    { name: 'Node.js', level: 90 },
    { name: 'Python', level: 75 },
    { name: 'Java', level: 80 },
    { name: 'C++', level: 75 },
    { name: 'C#', level: 70 },
    { name: 'Kotlin', level: 70 },
    { name: 'SQL', level: 90 },
    { name: 'Figma', level: 80 },
    { name: 'Canva', level: 85 },
    { name: 'MS Office', level: 95 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section is visible, animate; else remove animation so it can replay on re-enter
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      className="skills-section py-5"
      ref={sectionRef}
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <Container>
        <h2
          className="section-title text-center mb-4 text-white"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Skills
        </h2>
        <Row>
          {skills.map((skill, index) => (
            <Col md={6} key={index} className="mb-4">
              <h6 className="text-white">{skill.name}</h6>
              <div
                className={`animated-bar ${animate ? 'animate' : ''}`}
                style={{ '--progress-width': `${skill.level}%` }}
              >
                <ProgressBar
                  now={skill.level}
                  label={`${skill.level}%`}
                  variant="info"
                  striped
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
