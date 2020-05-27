import React from 'react';

import Logo from '../Logo';
import Navbar from '../Navbar';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Logo ext="dev" />
      <Navbar />
    </Container>
  );
}

export default Header;