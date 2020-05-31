import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { 
  Container, 
  ProjectsList, ProjectsItem, ProjectTitle, AdditionalInfo,
  ProjectOverviewContainer, ProjectName, ProjectTechs, ProjectTechsItem, ProjectDescription, ProjectCover,
  LeftPane, 
  LinksContainer, Link,
  Header, ProjectOverviewTitle 
} from './styles';

import Title from '../../components/Title';
import Icon from '../../components/Icon';

import back from '../../img/back.svg';
import github from '../../img/github.svg';
import web from '../../img/web.svg';

function Project({ name, cover }) {
  return (
    <ProjectsItem cover={cover}>
      <ProjectTitle>{name}</ProjectTitle>
    </ProjectsItem>
  );
}

function ProjectOverview({ name, description, techs, links, cover }) {
  const theme = useContext(ThemeContext);

  const linkIcons = { github, web };
  
  return (
    <ProjectOverviewContainer>
      <Header>
        <Icon src={back} color={theme.colors.light} size={1.1} />
        <ProjectOverviewTitle>Detalhes do projeto</ProjectOverviewTitle>
      </Header>
      
      <LeftPane>
        <ProjectName>{name}</ProjectName>
        <ProjectTechs>
          { techs.length > 0 && techs.map(tech => <ProjectTechsItem id={tech.id} children={tech.name} />)}
        </ProjectTechs>
        <ProjectDescription>{description}</ProjectDescription>
      </LeftPane>

      <ProjectCover cover={cover} />

      <LinksContainer>
      { links.length > 0 && links.map(link => (
        <Link href={link.url}>
          <Icon src={linkIcons[link.type]} />
        </Link>
      ))}
      </LinksContainer>
    </ProjectOverviewContainer>
  );
}


function Projects({ projects }) {
  return (
    <Container id="projects">
      <Title as="h1">📙 Projetos</Title>
      <ProjectsList>
        {projects.length > 0 && projects.map(project => (
          <Project
            key={project.id} 
            name={project.name}
            cover={project.cover}
          />
        ))}
        {/* <ProjectOverview {...onePost} /> */}
      </ProjectsList>
      <AdditionalInfo>
        Outros projetos estão disponíveis no meu <a href="https://github.com/cleberson-dev">Github</a>
      </AdditionalInfo>
    </Container>
  );
}

export default Projects;