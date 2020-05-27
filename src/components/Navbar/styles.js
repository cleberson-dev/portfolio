import styled from 'styled-components';

export const Container = styled.nav``; 

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const Item = styled.li`
  margin-left: 2rem;

  &:first-child { margin-left: 0; }
`

export const Link = styled.a`
  position: relative;
  color: white;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    opacity: 0.85;
    transition: opacity 0.2s;
  }

  &::after {
    content: '';
    display: inline-block;
    width: 0;
    height: 3px;
    background-color: white;
    opacity: 0;
    position: absolute;
    bottom: -11px;
    left: 0;
  }

  &:hover::after {
    width: 100%;
    opacity: 1;
    transition: width 0.2s, opacity 0.2s;
  }
`;