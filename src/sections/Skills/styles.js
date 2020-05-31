import styled from 'styled-components';

import Section from '../../components/Section';

export const Container = styled(Section)`
  background-color: #8338EC;
  color: ${props => props.theme.colors.light};
  padding: 2rem;
`;

export const SkillsLists = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
`;

export const SkillsCategoryList = styled.ul`

`;

export const SkillsCategoryTitle = styled.h2`
  font-family: 'Eina Bold', sans-serif;
  font-size: 1.75rem;
  margin-bottom: 10px;
  position: relative;
  right: 1.5rem;
`;

export const SkillsCategoryItem = styled.li`
  font-size: 1rem;
`;