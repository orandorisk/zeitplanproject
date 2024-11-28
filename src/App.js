import React from 'react';
import { Main, Profil, Feature, Pricing, Testimoni } from './components/landingpage';

function App() {
  return (
      <React.Fragment> 
        <Main />
        <Profil />
        <Feature />
        <Pricing />
        <Testimoni />
      </React.Fragment>
  );
}

export default App;
