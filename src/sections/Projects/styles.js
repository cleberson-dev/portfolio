import styled, { keyframes } from 'styled-components';

import Section from '../../components/Section';

export const Container = styled(Section)`
  & > h1 {
    margin: 5rem 0 0 2rem;
    align-self: flex-start;
  }

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectsList = styled.ul`
  width: 100vw;
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin-top: 2rem;
  position: relative;
`;

export const ProjectsItem = styled.li`
  width: calc(100vw / 3);
  height: calc(100vw / 3);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;

  background-image: url(${props => props.cover});
  background-position: center;
  background-size: cover;

  &:hover h1 {
    color: ${props => props.theme.colors.primary};
    transition: color 0.3s;
  }

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    display: inline-block;
    background-color: rgba(0, 0, 0, .8);
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ProjectTitle = styled.h1`
  font-family: 'Eina Bold', 'Open Sans', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  z-index: 2;
`;

export const AdditionalInfo = styled.p`
  font-family: 'Eina Semibold', 'Open Sans', sans-serif;
  font-weight: 500;
  margin-top: 1rem;
  margin-right: 2rem;
  align-self: flex-end;
  justify-content: space-between;

  & a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }
  & a:hover{
    text-decoration: underline;
  }
`;



const projectInfoIn = keyframes`
  from {
    transform: translateX(100vw);
  }

  to {
    transform: translateX(0);
  }
`

export const ProjectOverviewContainer = styled.div`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    'header cover'
    'details cover'
    'links cover';
  align-items: center;

  transform: translateX(-100vw);
  animation: ${projectInfoIn} .2s 0s ease-in forwards;
`;

export const ProjectName = styled.h2`
  font-family: 'Eina Bold', 'Open Sans', sans-serif;
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 5px;
`;

export const ProjectTechs = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
`;

export const ProjectTechsItem = styled.li`
  background-color: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.dark};
  font-size: 0.7rem;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 0.8rem;
  opacity: 0.5;
  cursor: default;
  margin-left: 10px;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    opacity: 1;
  }
`;

export const ProjectDescription = styled.p`

`;

export const ProjectCover = styled.div`
  height: 100%;
  width: 100%;

  background-image: url(${props => props.cover});
  background-position: center;
  background-size: cover;
  grid-area: cover;
`;


export const LeftPane = styled.div`
  width: 80%;
  height: 100%;
  box-sizing: border-box;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: details;
`;

export const Header = styled.header`
  grid-area: header;
  margin: 2rem 0 0 2rem;
  display: flex;
  align-items: center;

  & h1 {
    margin-left: 0.6rem;
  }
`;

export const ProjectOverviewTitle = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  color: white;
`;


export const LinksContainer = styled.div`
  grid-area: links;
  display: flex;
  margin: 0 0 2rem 2rem;
`;

export const Link = styled.a`
  margin-left: 1rem;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }
`;

export const LinkIcon = styled.img`
  width: 2rem;
`;