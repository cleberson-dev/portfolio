import styled from 'styled-components';

import Section from '../../components/Section';

export const Container = styled(Section)`
  padding: 2rem;
  color: ${props => props.theme.colors.dark};
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: 
    "title ."
    "description summary";
`;

export const Title = styled.h1`
  grid-area: title;
`;

export const Description = styled.p`
  grid-area: description;
  align-self: center;
  font-size: 1.1rem;
  line-height: 1.7rem;
`;

export const Me = styled.div`
  grid-area: summary;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  figure {
    margin-right: 1rem;
  }

  &:hover figure {
    border-color: ${props => props.theme.colors.primary};
    transition: border-color 0.2s;
  }
  &:hover p:first-child {
    color: ${props => props.theme.colors.primary};
    transition: color 0.2s;
  }
`;

export const Summary = styled.div`
  font-family: 'Eina Light', 'Open Sans' sans-serif;
`;

export const SummaryText = styled.p`
  margin: 2px 0;
  font-size: 0.9rem;

  &:first-child {
    font-family: 'Eina Bold', 'Open Sans', sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const ProfilePhoto = styled.figure`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 3px solid ${props => props.theme.colors.dark};
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: 0 -10px;
  margin: 0;
`;