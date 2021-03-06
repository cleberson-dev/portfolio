import React from 'react';

import { 
  Container, Content, 
  Title, Description, Illustration, 
  ContactButtonsContainer, ContactContainer
} from './styles';

import Icon from '../../components/Icon';


function ContactButtons({ contacts }) {
  return (
    <ContactButtonsContainer>
      {contacts.map(contact => (
        <Contact 
          link={contact.link} 
          icon={contact.icon} 
        />
      ))}
    </ContactButtonsContainer>
  );
}

function Contact({ link, icon }) {
  return (
    <ContactContainer href={link} target="_blank">
      <Icon {...icon} />
    </ContactContainer>
  );
}


function Home({ greeting, description, illustration, contacts }) {
  return (
    <Container as="main">
      <Content>
        <Title>{greeting}</Title>
        <Description>{description}</Description>
      </Content>

      <figure>
        <Illustration src={illustration} />
      </figure>
      
      { contacts.length > 0 && <ContactButtons contacts={contacts} /> }
    </Container>
  );
}

export default Home;