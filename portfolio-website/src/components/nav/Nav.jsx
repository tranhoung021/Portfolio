import React from 'react';
import './nav.css';
import { CgHomeAlt } from 'react-icons/cg';
import { RiUser3Line } from 'react-icons/ri';
import { GiClassicalKnowledge } from 'react-icons/gi';
import { BiMessageAltDetail } from 'react-icons/bi';
import {BsBriefcase} from 'react-icons/bs'
import { useState } from 'react';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><CgHomeAlt /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RiUser3Line /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiClassicalKnowledge /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsBriefcase /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageAltDetail /></a>
      
    </nav>

  )
}

export default Nav