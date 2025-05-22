import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const now = new Date().toLocaleString();

    emailjs.sendForm(
      'service_amylk6m',        // Replace with your EmailJS service ID
      'template_ggjvg0o',       // Replace with your EmailJS template ID
      form.current,
      'k1D0YB_RMpI4eZFALy'         // Replace with your EmailJS public key
    )
    .then((result) => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      console.error('Email send error:', error);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact" className="contact-section py-5 bg-light">
      <div data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <h2 className="text-center mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>Get in Touch</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h5 style={{ fontFamily: 'Playfair Display, serif' }}>Contact Info</h5>
              <ul className="list-unstyled">
                <li><strong>Email:</strong> <a href="mailto:helina0943@gmail.com">helina0943@gmail.com</a></li>
                <li><strong>Phone:</strong> +251943320688</li>
                <li><strong>Address:</strong> Addis Ababa, Ethiopia</li>
                <li><strong>LinkedIn:</strong> <a href="https://et.linkedin.com/in/helina-beneberu-5667142a0" target="_blank" rel="noreferrer">helina-beneberu</a></li>
                <li><strong>GitHub:</strong> <a href="https://github.com/helina8b" target="_blank" rel="noreferrer">helina8b</a></li>
              </ul>
            </div>
            <div className="col-md-6">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group mb-3">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" name="name" className="form-control" required />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" className="form-control" required />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" className="form-control" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
