import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillAudio, AiFillMail } from 'react-icons/ai';
import { DiYii } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <div>
    <Container>
      <Div1>
        <Link href="/" passHref>
          <a style={{display: "flex", alignItems: "center", color: 'hsla(109, 100%, 79%, 1)', marginBottom: '15px'}}>
          <DiYii size="3rem" /> <Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>

      <Div2>
        {/* <li>
          <Link href="#about">
            <NavLink>
              About
            </NavLink>
          </Link>
        </li> */}
        <li>
          <Link href="#projects" passHref>
            <NavLink>
                Projects
            </NavLink>
          </Link>
        </li>
        <li>
          <Link href="#techskills" passHref>
            <NavLink>
                Tech Skills
            </NavLink>
          </Link>
        </li>
        <li>
          <Link href="#hobbies" passHref>
            <NavLink>
                Hobbies
            </NavLink>
          </Link>
        </li>
      </Div2>

      <Div3>
        <SocialIcons href="https://www.linkedin.com/in/ana-ausek/" target="_blank" rel="noopener noreferrer" >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://github.com/aausek" target="_blank" rel="noopener noreferrer" >
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://tech-heads.simplecast.com/" target="_blank" rel="noopener noreferrer" >
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
