import React from 'react';

import { Container, SkillsLists, SkillsCategoryList, SkillsCategoryTitle, SkillsCategoryItem } from './styles';

import Title from '../../components/Title';


function SkillsCategory({ label, items }) {
  return (
    <SkillsCategoryList>
      <SkillsCategoryTitle>{label}</SkillsCategoryTitle>
      { items.length > 0 && items.map(item => <SkillsCategoryItem key={item.id} children={item.name} />)}
    </SkillsCategoryList>
  );
}


function Skills({ skills }) {
  return (
    <Container id="skills">
      <Title>👨‍💻 Minhas habilidades</Title>
      <SkillsLists>
        {skills.length > 0 && skills.map(skill => (
          <SkillsCategory 
            key={skill.type} label={skill.label} items={skill.items}  
          />
        ))}
      </SkillsLists>
    </Container>
  );
}

export default Skills;