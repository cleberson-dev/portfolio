import React from 'react';

import Title from '../../components/Title';

import { getAge } from '../../utils/math';

import { 
  Container, Description, 
  Me, Summary, SummaryText, ProfilePhoto 
} from './styles';

function About({ description, profilePhoto, summary }) {
  const [day, month, year] = summary.birth;
  const age = getAge([day, month, year]);

  return (
    <Container as="section" id="about">
      <Title>🧑 Sobre mim</Title>
      <Description>
        <p>Nascido em Governador Nunes Freire -MA, hoje em dia resido em São Luís - MA, cursando o 7º período de Engenharia da Computação, com objetivos de me mudar futuramente para regiões de maior oportunidade no mercado de TI, enquanto isso o trabalho terá que ser feito em regiões próximas ou de forma remota.</p>
        <p>Tendo 3 anos de experiência com programação, inicialmente alternando entre várias linguagens (PHP, Java, C/C++, Python), construindo aplicações web, já tenho 2 anos de desenvolvimento primário em JavaScript.</p>
        <p>Foco atualmente no front end, principalmente na construção de SPAs com React.js, tentando agora trazer qualidades de acessibilidade, SEO e performance às minhas aplicações. Porém, já escrevi o back end das minhas aplicações que exigiam isso.</p>
        <p>Sem experiência no mercado, foquei totalmente no aprendizado de tecnologias Web em tendência, sempre respeitando, aprendendo e utilizando os fundamentos não só de Web, como programação, arquitetura de software para a construção de aplicações, como também o aprendizado de workflows e práticas de desenvolvimento para o alcance de maior produtividade, uma vez no mercado. Como resultado, desenvolvi vários projetos pessoais, utilizando tecnologias diversas para apresentar provas concretas do aprendizado nelas.</p>
        <p>Sou muito curioso para aprender, minha abordagem é exploratória, com o uso frequente de documentações oficiais das tecnologias para aprendizado, e conteúdos majoritarimente em inglês, desenvolvendo assim minha facilidade na leitura, escuta, fala e escrita da língua. Pela inicial troca frequente de linguagens, porém com a constância de construir aplicações Web, em adição de ser auto-didata, alcancei uma facilidade para desenhar, depurar, implementar e testar aplicações, independente da linguagem escolhida.</p>
        <p>Toco violão, bateria, querendo aprender e focar em Teoria Musical, planejo me aprofundar nos estudos de Inglês, principalmente com gramática; tenho gosto por escrita, mas ainda nada foi solto publicamente, desejo soltar; como hobby gosto de jogar videogame (CS:GO), escutar podcasts, e assistir streamings de tecnologia.</p>
      </Description>
      <Me>
        <ProfilePhoto src={profilePhoto} alt="Foto de Perfil" />
        <Summary>
          <SummaryText>{summary.name}</SummaryText>
          <SummaryText>{age} anos</SummaryText>
          <SummaryText>{summary.location}</SummaryText>
          <SummaryText>{summary.education}</SummaryText>
        </Summary>
      </Me>
    </Container>
  );
}

export default About;