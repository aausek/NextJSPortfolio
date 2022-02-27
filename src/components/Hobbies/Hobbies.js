import React from 'react';

import { Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import { IframeSection } from './HobbiesStyles';

const Hobbies = () => (
  <Section nopadding id="hobbies">
    <IframeSection>
      <SectionDivider/>
        <SectionTitle main>Hobbies</SectionTitle>
          <iframe height="200px" width="100%" frameborder="no" scrolling="no" seamless src="https://player.simplecast.com/e3dc5c3e-73c1-437b-9fdd-31c3da634f5d?dark=true"/>
          <br/>
          <br/>
          <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1E4nJY3ELWBjF1?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"/>
    </IframeSection>
  </Section>
);

export default Hobbies;