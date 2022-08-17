import React from 'react';
import CV from '../../assets/CVHoungTran.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact info</a>
    </div>
  )
}

export default CTA