// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <h1 className='h1footer'>Contact Us</h1>
      <div className="underline"></div>
      <div className="footer-contents">
        <div className="contact-details">
        <p>Email: recipe@gmail.com</p>
        <p>Phone: +254 456-7890</p>
        <p>Address: 123 Kutus Street, Kirinyaga</p>
        </div>


        <div className="contact-form">
        <h2>Send us a Message</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
        </div>

      </div>
      <p className='footer-rights'>&copy; 2024 Your Website Name. All Rights Reserved.</p>


      

    </div>
  );
};

export default Footer;
