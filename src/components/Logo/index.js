import React from "react";

import { Container, Extension } from './styles';

function Logo({ ext }) {
  return (
    <Container>
      cleberson<Extension>.{ext}</Extension>
    </Container>
  );
}

export default Logo;