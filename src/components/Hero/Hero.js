import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row padding>
    <LeftSection>
      <SectionTitle main center>
        I'm Ana... <br/>
        Welcome to my page!
      </SectionTitle>
      <SectionText>
        Find some information about my recent CS projects, professional history and skills. 
        Check out our podcast and some favorite Spotify playlists under <i>Hobbies</i>.
      </SectionText>
      {/* <Button onClick={() => window.open("https://www.linkedin.com/in/ana-ausek/", "_blank")} >More About Me</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;