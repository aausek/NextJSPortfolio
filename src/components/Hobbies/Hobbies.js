import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionText} from '../../styles/GlobalComponents';
import { IframeSection } from './HobbiesStyles';

const Hobbies = () => (
  <Section nopadding id="hobbies">
    <IframeSection>
      <SectionDivider/>
        <SectionTitle main>Hobbies</SectionTitle>
          <SectionText>
          Our latest Tech Heads episode and my current favorite Spotify playlist.
          </SectionText>
          <iframe height="200px" width="100%" frameborder="no" scrolling="no" seamless src="https://player.simplecast.com/8fa3bd0f-62b0-41f2-a9b2-2038cb9da09c?dark=true"></iframe>
          <br/>
          <br/>
          <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1E4nJY3ELWBjF1?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"/>
    </IframeSection>
  </Section>
);

export default Hobbies;