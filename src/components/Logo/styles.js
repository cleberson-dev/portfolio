import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1.1rem;
  letter-spacing: 0.8px;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.colors.light};

  &:hover {
    color: ${props => props.theme.colors.primary};
    transition: color .2s;
  }
`;

export const Extension = styled.span`

`;