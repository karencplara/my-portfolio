import React from 'react';

import { useHistory } from 'react-router-dom';

import { About, Description, Image } from '../styles';

import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnimation, scrollReveal } from '../animation';
import { useScroll } from '../hooks/useScroll';

const AboutSection = () => {
  const [element, controls] = useScroll();
  const history = useHistory();

  const redirectHandler = () => {
    history.push('/contact')
  }
  return(
    <About
		variants={scrollReveal}
		animate={controls}
		initial='hidden'
		ref={element}
    >
		<Description>
			<motion.h2 variants={titleAnimation}>Meu nome</motion.h2>
			<motion.h2 variants={titleAnimation}>Minha profissão</motion.h2>
			<motion.p variants={fade}>
			Lorem ipsum dolor sit amet.
			</motion.p>
			<button onClick={redirectHandler}>Contact Me</button>
		</Description>
		<Image>
			<motion.div variants={photoAnimation}>
			<img src="http://lorempixel.com/400/200/" />
			</motion.div>
		</Image>
    </About>
  )
}
export default AboutSection;