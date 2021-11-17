import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row padding>
    <LeftSection>
      <SectionTitle main center>
        I'm Ana... <br/>
        Welcome to my page!
      </SectionTitle>
      <SectionText>
        The purpose of this portfolio page is to showcase some of my professional 
        and academic achievements in the area of software development.
      </SectionText>
      <Button onClick={() => window.open("https://www.linkedin.com/in/ana-ausek/", "_blank")}>More About Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;