import React from 'react';
import { Main, Profil, Feature, Pricing, Testimoni, Footer } from './components/landingpage';

function App() {
  return (
      <React.Fragment> 
        <Main />
        <Profil />
        <Feature />
        <Pricing />
        <Testimoni />
        <Footer />
      </React.Fragment>
  );
}

export default App;
