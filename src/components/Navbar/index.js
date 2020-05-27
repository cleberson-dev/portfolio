import React from 'react';

import { Container, List, Item, Link } from './styles';

function Navbar() {
  const items = [
    { link: '#', label: '🧑 Sobre' },
    { link: '#', label: '👨‍💻 Habilidades' },
    { link: '#', label: '📙 Projetos' },
    { link: '#', label: '📙 Contatos' }
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