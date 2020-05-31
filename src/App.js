import React from 'react';
import AppContainer from './App.styles';

import Header from './components/Header';

import HomeSection from './sections/Home';
import AboutSection from './sections/About';
import SkillsSection from './sections/Skills';

import homeIllustration from './img/home-illustration.svg';

import githubIcon from './img/github.svg';
import twitterIcon from './img/twitter.svg';
import emailIcon from './img/at.svg';

import profilePhoto from './img/profile-photo.jpg';

import skillsData from './data/skills.json';


function App() {
  return (
    <AppContainer>
      <Header />

      <HomeSection 
        greeting='Olá, mundo! 🌎' 
        description='Me chamo Cleberson, um desenvolvedor front-end, com especialidade em React.js, tendo um grande amor pela Web.'
        illustration={homeIllustration}
        contacts={[
          { link: 'https://github.com/cleberson-dev', icon: { src: githubIcon } },
          { link: 'https://twitter.com/jrcleb', icon: { src: twitterIcon, color: '#1DA1F2' } },
          { link: 'mailto:cleberson.dev@gmail.com', icon: { src: emailIcon, color: '#2867B2' } }
        ]}
      />

      <AboutSection 
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac ligula placerat, egestas lacus sed, molestie urna. Vivamus volutpat venenatis nunc tincidunt eleifend. Aenean ac venenatis risus. Sed nec finibus felis, in vestibulum magna. Vivamus vulputate volutpat augue at aliquet. Nullam vel maximus lacus. Etiam in blandit lorem. Nullam euismod tempus augue et posuere. In sit amet fermentum magna, sit amet semper tellus. Donec efficitur scelerisque metus vitae congue. Ut vel metus quis ex dictum pulvinar. Vestibulum pretium sapien vel velit dignissim tincidunt. Etiam ullamcorper ex eget sapien aliquam malesuada. Mauris rhoncus arcu sapien, sed cursus felis dapibus id. Phasellus vitae arcu lobortis, feugiat risus in, pellentesque lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac ligula placerat, egestas lacus sed, molestie urna. Vivamus volutpat venenatis nunc tincidunt eleifend. Aenean ac venenatis risus. Sed nec finibus felis, in vestibulum magna. Vivamus vulputate volutpat augue at aliquet. Nullam vel maximus lacus. Etiam in blandit lorem. Nullam euismod tempus augue et posuere. In sit amet fermentum magna, sit amet semper tellus. Donec efficitur scelerisque metus vitae congue. Ut vel metus quis ex dictum pulvinar. Vestibulum pretium sapien vel velit dignissim tincidunt. Etiam ullamcorper ex eget sapien aliquam malesuada. Mauris rhoncus arcu sapien, sed cursus felis dapibus id. Phasellus vitae arcu lobortis, feugiat risus in, pellentesque lectus.'
        profilePhoto={profilePhoto}
        summary={{
          name: 'Cleberson F R Junior',
          birth: [11, 1, 1999],
          location: 'São Luís - MA, Brasil',
          education: 'Engenharia da Computação (7/10)'
        }}
      />

      <SkillsSection 
        skills={skillsData} 
      />
    </AppContainer>
  );
}



export default App;
