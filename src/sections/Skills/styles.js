import styled from 'styled-components';

import Section from '../../components/Section';

export const Container = styled(Section)`
  background-color: #8338EC;
  color: ${props => props.theme.colors.light};
  padding: 2rem;

  @media(max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1rem;

    & > h1 {
      margin-bottom: 0;
    }
  }
`;

export const SkillsLists = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
`;

export const SkillsCategoryList = styled.ul`
  margin-right: 2rem;
  @media(max-width: ${props => props.theme.breakpoints.mobile}) {
    padding-left: 1.5rem;
    margin-bottom: 0;
  }
`;

export const SkillsCategoryTitle = styled.h2`
  font-family: 'Eina Bold', sans-serif;
  font-size: 1.75rem;
  margin-bottom: 10px;
  position: relative;
  right: 1.5rem;

  @media(max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`;

export const SkillsCategoryItem = styled.li`
  font-size: 1rem;
`;