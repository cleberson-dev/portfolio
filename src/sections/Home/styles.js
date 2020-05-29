import styled, { keyframes } from 'styled-components';

import Section from '../../components/Section';

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
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
`;

const Pane = styled.div`
  width: 50%;
`;

export const LeftPane = styled(Pane)``;

export const Title = styled.h1`
  font-family: 'Eina Bold', sans-serif;
  font-size: 3rem;
  margin: 0;
  opacity: 0;
  animation: ${titleIn} 0.5s 0.5s ease-in forwards;
`;

export const Description = styled.p`
  margin: 5px 0;
  font-size: 1.25rem;
  opacity: 0;
  animation: ${descriptionIn} 0.5s 1s ease-in forwards;
`;

export const RightPane = styled(Pane)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Illustration = styled.img`
  width: 60%;
  transform: scale(0);
  animation: ${illustrationIn} 0.5s 0.8s ease-in-out forwards;
`;

export const SocialLinks = styled.address`
  display: flex;
  position: absolute;
  right: 2rem;
  bottom: 2rem;
`;

export const SocialButton = styled.a`
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

export const SocialButtonLogo = styled.img`
  width: 90%;
`