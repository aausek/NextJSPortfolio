import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectsData = [
  {
    title: "Project 1",
    description: "This is project 1",
  },
  {
    title: "Project 2",
    description: "This is project 2",
  },
  {
    title: "Project 3",
    description: "This is project 3",
  },
  {
    title: "Project 4",
    description: "This is project 4",
  },
  {
    title: "Project 5",
    description: "This is project 5",
  },
];

const Projects = () => (
  <Section>
    <SectionDivider>
    </SectionDivider>
    <SectionTitle></SectionTitle>
    <GridContainer>
      {/* Import from constants/constants */}
      {projectsData.map((project) => (
        <div>
          {project.title}
          <br/>
          {project.description}
        </div>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;