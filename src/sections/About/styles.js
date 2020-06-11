import styled from 'styled-components';

import Section from '../../components/Section';

export const Container = styled(Section)`
  padding: 2rem;
  color: ${props => props.theme.colors.dark};
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: 
    "title ."
    "description summary";

  @media(max-width: 320px) {
    padding: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    grid-template-areas: 
    "title"
    "summary"
    "description";
  }
`;

export const Description = styled.div`
  font-family: 'Open Sans', sans-serif;
  grid-area: description;
  align-self: center;
  font-size: 1rem;
  line-height: 1.7rem;
`;

export const Me = styled.div`
  grid-area: summary;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  figure {
    margin-bottom: 1rem;
  }

  &:hover figure {
    border-color: ${props => props.theme.colors.primary};
    transition: border-color 0.2s;
  }
  &:hover p:first-child {
    color: ${props => props.theme.colors.primary};
    transition: color 0.2s;
  }

  @media(max-width: 320px) {
    flex-direction: row;
    justify-content: flex-start;

    figure {
      margin-bottom: 0;
      margin-right: 10px;
    }
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

  @media(max-width: 320px) {
    flex-direction: row;
    font-size: 0.85rem;

    &:first-child {
      font-size: 1.1rem;
    }
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

  @media(max-width: 320px) {
    width: 80px;
    height: 80px;
  }
`;