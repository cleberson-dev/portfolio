import React from 'react';

import Title from '../../components/Title';

import profilePhoto from '../../img/profile-photo.jpg';

import { 
  Container, Description, 
  Me, Summary, SummaryText, ProfilePhoto 
} from './styles';

function About() {
  return (
    <Container as="section">
      <Title>🧑 Sobre mim</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac ligula placerat, egestas lacus sed, molestie urna. Vivamus volutpat venenatis nunc tincidunt eleifend. Aenean ac venenatis risus. Sed nec finibus felis, in vestibulum magna. 
        Vivamus vulputate volutpat augue at aliquet. Nullam vel maximus lacus. Etiam in blandit lorem. Nullam euismod tempus augue et posuere. In sit amet fermentum magna, sit amet semper tellus. Donec efficitur scelerisque metus vitae congue. Ut vel metus quis ex dictum pulvinar. Vestibulum pretium sapien vel velit dignissim tincidunt. Etiam ullamcorper ex eget sapien aliquam malesuada. Mauris rhoncus arcu sapien, sed cursus felis dapibus id. Phasellus vitae arcu lobortis, feugiat risus in, pellentesque lectus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac ligula placerat, egestas lacus sed, molestie urna. Vivamus volutpat venenatis nunc tincidunt eleifend. Aenean ac venenatis risus. Sed nec finibus felis, in vestibulum magna. 
        Vivamus vulputate volutpat augue at aliquet. Nullam vel maximus lacus. Etiam in blandit lorem. Nullam euismod tempus augue et posuere. In sit amet fermentum magna, sit amet semper tellus. Donec efficitur scelerisque metus vitae congue. Ut vel metus quis ex dictum pulvinar. Vestibulum pretium sapien vel velit dignissim tincidunt. Etiam ullamcorper ex eget sapien aliquam malesuada. Mauris rhoncus arcu sapien, sed cursus felis dapibus id. Phasellus vitae arcu lobortis, feugiat risus in, pellentesque lectus.
      </Description>
      
      <Me>
        <ProfilePhoto src={profilePhoto} alt="Arrr" />
        <Summary>
          <SummaryText>Cleberson F R Junior</SummaryText>
          <SummaryText>21 anos</SummaryText>
          <SummaryText>São Luís - MA, Brasil</SummaryText>
          <SummaryText>Engenharia da Computação (7/10)</SummaryText>
        </Summary>
      </Me>
    </Container>
  );
}

export default About;