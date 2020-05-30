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
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const Summary = styled.div`
  margin-left: 8px;
  font-family: 'Open Sans', sans-serif;
`;

export const SummaryText = styled.p`
  margin: 2px 0;
  font-size: 0.9rem;

  &:first-child {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const ProfilePhoto = styled.img`
  height: 180px;
  border-radius: 50%;
  border: 3px solid ${props => props.theme.colors.dark};
`;