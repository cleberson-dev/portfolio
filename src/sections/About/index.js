import React from 'react';

import Title from '../../components/Title';

import { getAge } from '../../utils/math';

import { 
  Container, Description, 
  Me, Summary, SummaryText, ProfilePhoto 
} from './styles';

function About({ description, profilePhoto, summary }) {
  const [day, month, year] = summary.birth;
  const age = getAge([day, month, year]);

  return (
    <Container as="section" id="about">
      <Title>🧑 Sobre mim</Title>
      <Description>{description}</Description>
      <Me>
        <ProfilePhoto src={profilePhoto} alt="Foto de Perfil" />
        <Summary>
          <SummaryText>{summary.name}</SummaryText>
          <SummaryText>{age} anos</SummaryText>
          <SummaryText>{summary.location}</SummaryText>
          <SummaryText>{summary.education}</SummaryText>
        </Summary>
      </Me>
    </Container>
  );
}

export default About;