import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { 
  Container, ContactForm, Field, TextArea, SendButton,
  Social, SocialLinks, SocialText, SocialLink, SocialIcon
} from './styles';

import Title from '../../components/Title';


import github from '../../img/github.svg';
import twitter from '../../img/twitter.svg';

function Contact() {
  const theme = useContext(ThemeContext);

  return (
    <Container id="contact">
      <Title>📝 Contate-me!</Title>
      <div style={{ display: 'flex', width: '100%' }}>
        <ContactForm>
          <Field type="text" placeholder="Nome..." />
          <Field type="email" placeholder="Email..." />
          <TextArea placeholder="Digite aqui sua mensagem..." />
          <SendButton>Enviar</SendButton>
        </ContactForm>
        <Social>
          <SocialText>...e me acompanhe <br />nas minhas redes sociais!</SocialText>
          <SocialLinks>
            <SocialLink><SocialIcon src={github} color={theme.colors.light} /></SocialLink>
            <SocialLink><SocialIcon src={twitter} color={theme.colors.light} /></SocialLink>
          </SocialLinks>
        </Social>
      </div>
    </Container>
  );
}

export default Contact;