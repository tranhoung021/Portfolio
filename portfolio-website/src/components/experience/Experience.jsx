import React from 'react';
import './experience.css';
import { HiBadgeCheck } from 'react-icons/hi';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="experience__container">
        <div className="experience__skills">
          <h3>Frontend Devolopment</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiBadgeCheck className='experience_details-icon' />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className='experience_details-icon' />
              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className='experience_details-icon' />
              <div>
                <h4>Wordpress</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className='experience_details-icon' />
              <div>
                <h4>Javascript</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className='experience_details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className='experience_details-icon' />
              <div>
                <h4>Angular</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className='experience_details-icon' />
              <div>
                <h4>JQuery</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className='experience_details-icon' />
              <div>
                <h4>ReactJS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className='experience_details-icon' />
              <div>
                <h4>Photoshop</h4>
                <small>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience