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

  @media(max-width: ${props => props.theme.breakpoints.mobile}) {
    min-height: 90vh;
    padding: 5px;
    flex-direction: column-reverse;
    justify-content: center;

    & > figure {
      width: 100%;
      height: 100%;
      margin: 0;
    }
  }
`;

export const Content = styled.div`
  width: 50%;

  @media(max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
    box-sizing: border-box; 
    padding: 0 1rem;
  }
`;


export const Title = styled.h1`
  font-family: 'Eina Bold', sans-serif;
  font-size: 3rem;
  margin: 1rem 0;

  @media(max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
    margin: 0;
    margin-top: 1.5rem;
  }
`;

export const Description = styled.p`
  margin: 5px 0;
  font-size: 1.25rem;
  opacity: 0;
  animation: ${descriptionIn} 0.5s 1s ease-in forwards;
  @media(max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
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

  @media(max-width: ${props => props.theme.breakpoints.mobile}) {
    right: 1rem;
    bottom: 1rem;
  }
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

  @media(max-width: ${props => props.theme.breakpoints.mobile})  {
    width: 1rem;
    height: 1rem;
  }
`;