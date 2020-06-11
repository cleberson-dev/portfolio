import styled from 'styled-components';

export const Container = styled.h1`
  font-family: 'Eina Bold', sans-serif;
  font-size: 2.5rem;

  @media(max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.75rem;
  }
`;