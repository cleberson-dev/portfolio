import React from 'react';

import { Container, List, Item, Link } from './styles';

function Navbar() {
  const items = [
    { link: '#about', label: '🧑 Sobre' },
    { link: '#skills', label: '👨‍💻 Habilidades' },
    { link: '#projects', label: '📙 Projetos' },
    { link: '#contact', label: '📙 Contato' }
  ];
  
  return (
    <Container>
      <List>
        {items.map((item) => (
          <Item>
            <Link href={item.link}>{item.label}</Link>
          </Item>
        ))}
      </List>
    </Container>  
  );
}

export default Navbar;