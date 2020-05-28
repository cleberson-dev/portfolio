import React from 'react';
import AppContainer from './App.styles';

import Header from './components/Header';
import HomeSection from './sections/Home';

function App() {
  return (
    <AppContainer>
      <Header />
      <HomeSection />
    </AppContainer>
  );
}

export default App;
