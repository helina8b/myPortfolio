import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';


function Projects() {
  const [projects, setProjects] = useState([]);

useEffect(() => {
  fetch('https://api.github.com/users/helina8b/repos')
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(repo => repo.name.toLowerCase() !== 'myportfolio'); // ⛔ exclude this
      const fetchedProjects = filteredData.map(repo => ({
        title: repo.name,
        description: repo.description || 'No description provided',
        url: repo.html_url,
        image: getImageForProject(repo.name),
      }));
      setProjects(fetchedProjects);
    })
    .catch(error => console.error('Error fetching GitHub repositories:', error));
}, []);


  const getImageForProject = (name) => {
  
    switch (name.trim().toLowerCase()) {
      case 'startup-consultancy':
        return '/images/startup.jpg';
      case 'food-ordering-app':
        return '/images/food.jpg';
      case 'hotel-management-system':
        return '/images/hotel.jpg';
      case 'information-retrieval':
        return '/images/python.jpg';
      case 'coursesync':
        return '/images/course.jpg';
      
      default:
        return '/images/default.jpg'; 
    }
  };

  return (
    <section id="projects" className="project-section">
      <div data-aos="fade-up" data-aos-duration="1000">
        <Container>
          <h2 className="section-title" style={{ fontFamily: 'Playfair Display, serif' }}>Projects</h2>
          <div className="scroll-wrapper">
            <div className="card-scroll-container">
              {projects.map((project, index) => (
                <Card key={index} className="project-card">
                  <Card.Img variant="top"
                       src={project.image}
                       alt={project.title}
                       className="project-image"/>
                  <Card.Body>
                    <Card.Title className="text-primary fw-bold">{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      View on GitHub
                    </a>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Projects;

