import React from 'react';
import './about.css';
import ME from '../../assets/me-about.png';
import { MdComputer } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me_image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
          <article className="about__card">
              <MdComputer className='about__icon' />
              <h5>Experience</h5>
              <small>1+ years</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>10+</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>            
          </div>

          <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Eius architecto cumque laborum deserunt nisi veniam natus nobis quia fuga
              aperiam facilis optio aliquam corporis vero sunt illo, dolores placeat voluptatibus.
            </p>

            <a href="#contact" className="btn btn-primary">Contact me</a>
        </div>

      </div>
    </section>
  )
}

export default About