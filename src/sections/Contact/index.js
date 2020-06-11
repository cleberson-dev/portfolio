import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { 
  Container, ContactForm, Field, TextArea, SendButton,
  Social, SocialLinks, SocialText, SocialLink, SocialIcon
} from './styles';

import Title from '../../components/Title';


import github from '../../img/github.svg';
import twitter from '../../img/twitter.svg';
import instagram from '../../img/instagram.svg';
import linkedin from '../../img/linkedin.svg';

function Contact() {
  const theme = useContext(ThemeContext);

  const socials = [
    { url: 'https://github.com/cleberson-dev', icon: { src: github } },
    { url: 'https://twitter.com/jrcleb', icon: { src: twitter } },
    { url: 'https://www.instagram.com/cleberson.io/', icon: { src: instagram } },
    { url: 'https://www.linkedin.com/in/clebersondev/', icon: { src: linkedin } }
  ]

  return (
    <Container id="contact">
      <Title>📝 Contate-me!</Title>
      <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
        <ContactForm>
          <Field disabled type="text" placeholder="Nome..." />
          <Field disabled type="email" placeholder="Email..." />
          <TextArea disabled placeholder="Digite aqui sua mensagem..." />
          <SendButton disabled >Enviar</SendButton>
        </ContactForm>
        <Social>
          <SocialText>...e me acompanhe <br />nas minhas redes sociais!</SocialText>
          <SocialLinks>
            {socials.length > 0 && socials.map(social => (
              <SocialLink href={social.url}>
                <SocialIcon {...social.icon} color={theme.colors.light} />
              </SocialLink>
            ))}
          </SocialLinks>
        </Social>
      </div>
    </Container>
  );
}

export default Contact;