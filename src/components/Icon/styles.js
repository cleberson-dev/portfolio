import styled from 'styled-components';

import { ReactSVG } from 'react-svg';

export const Icon = styled(ReactSVG)`
  div {
    width: ${props => props.size ? `calc(1rem * ${props.size})` : '2rem' };
    height: ${props => props.size ? `calc(1rem * ${props.size})` : '2rem' };
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  svg {
    width: 100%;
    fill: ${props => props.color || 'black' };
  }
`;