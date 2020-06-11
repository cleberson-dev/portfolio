import styled from 'styled-components';

export const Container = styled.header`
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 1;
  padding: 2rem;
  color: ${props => props.theme.colors.light};
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;


  @media(max-width: ${props => props.theme.breakpoints.mobile}) {
    background-color: ${props => props.theme.colors.primary};
    position: relative;
    padding: 1rem;
  }
`;