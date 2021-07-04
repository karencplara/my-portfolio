import React from 'react';

import { About, Description, Image } from '../styles';

import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnimation } from '../animation';

const AboutSection = () => {
  return(
    <About>
      <Description>
        <motion.h2 variants={titleAnimation}>Meu nome</motion.h2>
        <motion.h2 variants={titleAnimation}>Minha profissão</motion.h2>
        <motion.p variants={fade}>
          Lorem ipsum dolor sit amet.
        </motion.p>
        <button>Contact Me</button>
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