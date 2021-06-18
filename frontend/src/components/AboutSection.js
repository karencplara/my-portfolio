import React from 'react';

import { About, Description, Image } from '../styles';

const AboutSection = () => {
  return(
    <About>
      <Description>
        <h2>Meu nome</h2>
        <h2>Minha profissão</h2>
        <p>
          Lorem ipsum dolor sit amet.
        </p>
        <button>Contact Me</button>
      </Description>
      <Image>
        <img src="http://lorempixel.com/400/200/" />
      </Image>
    </About>
  )
}
export default AboutSection;