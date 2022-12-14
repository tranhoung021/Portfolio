import React from 'react'
import './contact.css'
import { IoMailOutline } from 'react-icons/io5'
import { BsTelephone } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dpl4xgg', 'template_r1oer2j', form.current, 'z9vJeU_JVQyviz9qB').then(() => {
      alert("Message sent successfully");
  }, (error) => {
      alert(error.text);
  });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <a className="contact__option" href="mailto:majinht@hotmail.com" target="_blank">
            <IoMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>majinht@hotmail.com</h5>
            <a href="mailto:majinht@hotmail.com" target="_blank">Send a message</a>
          </a>
          <a className="contact__option" href="tel:+46724480033" target="_blank">
            <BsTelephone className='contact__option-icon' />
            <h4>Phone</h4>
            <h5>0724480033</h5>
            <a href="tel:+46724480033" target="_blank">Contact me</a>
          </a>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name="email" placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact