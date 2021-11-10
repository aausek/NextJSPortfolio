import React from 'react';
import { DiCode, DiCss3, DiDatabase, DiHtml5, DiJavascript, DiJavascript1, DiMysql, DiPython, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section nopadding id="techskills">
    <SectionDivider/>
      <SectionTitle main>Technologies</SectionTitle>
      <SectionText>
        Technologies and tools I have used in Front and Back end devevelopment.
      </SectionText>
      <List>
        <ListItem>
          <ListContainer>
            <ListTitle><u>Front End</u></ListTitle>
            <ListParagraph>
              <DiHtml5 size="3rem" /> HTML5 <br/>
              <DiCss3 size="3rem" /> CSS3 <br/>
              <DiJavascript1 size="3rem" /> JavasScript <br/>
              <DiReact size="3rem" /> ReactJS <br/>
              <DiJavascript1 size="3rem" /> VueJS <br/>
              
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle><u>Back End</u></ListTitle>
            <ListParagraph>
              <DiDatabase size="3rem" /> Oracle SQL Developer <br/>
              <DiMysql size="3rem" /> MySQL
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle><u>OOP</u></ListTitle>
            <ListParagraph>
              <DiPython size="3rem" /> Python3 <br/>
              <DiCode size="3rem" /> C++ <br/>
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>    
);

export default Technologies;
