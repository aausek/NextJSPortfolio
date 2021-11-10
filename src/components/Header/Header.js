import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillAudio, AiFillMail } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <div>
    <Container>
      <Div1>
        <Link href="/">
          <a style={{display: "flex", alignItems: "center", color: 'white', marginBottom: '15px'}}>
            <DiCssdeck size="3rem"/><Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>

      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>
              Projects
            </NavLink>
          </Link>
        </li>
        <li>
          <Link href="#skills">
            <NavLink>
              Skills
            </NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>
              About
            </NavLink>
          </Link>
        </li>
      </Div2>


      <Div3>
        <SocialIcons href="https://www.linkedin.com/in/ana-ausek/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://github.com/aausek" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://tech-heads.simplecast.com/" target="_blank">
          <AiFillAudio size="3rem" />
        </SocialIcons>
        <SocialIcons href="mailto:ausek.ana@gmail.com">
          <AiFillMail size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default Header;
