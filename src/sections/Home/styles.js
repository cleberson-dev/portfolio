import styled, { keyframes } from 'styled-components';

import Section from '../../components/Section';
import SectionTitle from '../../components/Title';

const illustrationIn = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const titleIn = keyframes`
  from {
    opacity: 0;
    position: relative;
    right: 400px;
  }

  to {
    opacity: 1;
    position: relative;
    right: 0;
  }
`;

const descriptionIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;



export const Container = styled(Section)`
  width: 99vw;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 2rem;
  display: flex;
  align-items: center;
  
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};

  & > figure {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  @media(max-width: 320px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const Content = styled.div`
  width: 50%;
`;


export const Title = styled(SectionTitle)`
  font-size: 10rem;
`;

export const Description = styled.p`
  margin: 5px 0;
  font-size: 1.25rem;
  opacity: 0;
  animation: ${descriptionIn} 0.5s 1s ease-in forwards;
`;



export const Illustration = styled.img`
  width: 60%;
  justify-self: center;
  transform: scale(0);
  animation: ${illustrationIn} 0.5s 0.8s ease-in-out forwards;
`;

export const ContactButtonsContainer = styled.address`
  display: flex;
  position: absolute;
  right: 2rem;
  bottom: 2rem;
`;

export const ContactContainer = styled.a`
  background-color: ${props => props.theme.colors.light};
  border-radius: 50%;
  padding: 10px;
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s;

  &:last-child { margin-right: 0; }

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s;
  }
`;