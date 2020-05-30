import React from 'react';
import AppContainer from './App.styles';

import Header from './components/Header';

import HomeSection from './sections/Home';
import AboutSection from './sections/About';

import homeIllustration from './img/home-illustration.svg';

import githubIcon from './img/github.svg';
import twitterIcon from './img/twitter.svg';
import emailIcon from './img/at.svg';



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

      <AboutSection />
    </AppContainer>
  );
}



export default App;
