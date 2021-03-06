import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// const projectsData = [
//   {
//     title: "Project 1",
//     description: "This is project 1",
//   },
//   {
//     title: "Project 2",
//     description: "This is project 2",
//   },
//   {
//     title: "Project 3",
//     description: "This is project 3",
//   },
//   {
//     title: "Project 4",
//     description: "This is project 4",
//   },
//   {
//     title: "Project 5",
//     description: "This is project 5",
//   },
// ];

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {/* Import from constants/constants */}
      {projects.map(({id, image, title, year, description, tags, repo}) => (
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <HeaderThree year>{year}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div><br/>
            <TitleContent>
              Stack
            </TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={repo} target="_blank">Code Repository</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
  
);

export default Projects;