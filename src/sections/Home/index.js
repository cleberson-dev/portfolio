import React from 'react';

import { 
  Container, LeftPane, RightPane, 
  Title, Description, Illustration, 
  SocialLinks, SocialButton 
} from './styles';

import Icon from '../../components/Icon';

import homeIllustration from '../../img/home-illustration.svg';

import at from '../../img/at.svg';
import github from '../../img/github.svg';
import twitter from '../../img/twitter.svg';

function Home() {
  return (
    <Container as="main">
      <LeftPane>
        <Title>Olá, mundo! 🌎</Title>
        <Description>Me chamo Cleberson, um desenvolvedor front-end, com especialidade em React.js, tendo um grande amor pela Web.</Description>
      </LeftPane>

      <RightPane>
        <Illustration src={homeIllustration} />
      </RightPane>

      <SocialLinks>
        <SocialButton href="https://github.com/cleberson-dev" target="_blank">
          <Icon src={github} />
        </SocialButton>
        <SocialButton href="https://twitter.com/jrcleb" target="_blank">
          <Icon src={twitter} color='#1DA1F2' />
        </SocialButton>
        <SocialButton href="mailto:cleberson.dev@gmail.com" target="_blank">
          <Icon src={at} color='#2867B2' />
        </SocialButton>
      </SocialLinks>
    </Container>
  );
}

export default Home;