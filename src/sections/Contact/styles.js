import styled from 'styled-components';

import Section from '../../components/Section';
import Icon from '../../components/Icon';

export const Container = styled(Section)`
  background-color: #3A86FF;
  color: ${props => props.theme.colors.light};
  padding: 2rem;
`;

export const ContactForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;

  input, textarea {
    margin-bottom: 1rem;
  }
`;

export const Field = styled.input`
  background-color: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.dark};
  padding: 0.6rem;
  border-radius: 0.4rem;
  border: none;
  outline: none;
  font-family: 'Eina Semibold', 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  width: calc(100% - 1.2rem);

  &::placeholder {
    color: #3A86FF;
    font-style: italic;
  }

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    
  }
`;

export const TextArea = styled.textarea`
  background-color: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.dark};
  padding: 0.6rem;
  border-radius: 0.4rem;
  border: none;
  outline: none;
  resize: none;
  font-family: 'Eina Regular', sans-serif; 
  font-size: 1rem;
  font-weight: 500;
  width: calc(100% - 1.2rem);
  height: 13rem;

  &::placeholder {
    color: #3A86FF;
    font-style: italic;
  }
`;

export const SendButton = styled.button`
  background-color: #9BC53D;
  color: ${props => props.theme.colors.light};
  width: fit-content;
  padding: 5px 2rem;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Eina Bold', 'Open Sans', sans-serif;
  align-self: flex-end; 
  cursor: pointer;

  &:hover {
    filter: grayscale(0.4);
  }
`;




export const Social = styled.div`
  margin-top: 0;
  margin-left: 2rem;
`;

export const SocialText = styled.p`
  font-family: 'Eina Bold', 'Open Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 8px;
`;

export const SocialLinks = styled.address`
  display: flex;
`;

export const SocialLink = styled.a`
  margin-right: 0.8rem;
`;

export const SocialIcon = styled(Icon)`
  &:hover svg {
    transform: scale(1.1);
    transition: transform 0.2s;
  }
`;
