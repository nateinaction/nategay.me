import React from 'react';
import Header from './header/index'
import ProjectsContainer from './projects/container'
import CertificatesContainer from './certificates/container'
import LanguagesContainer from './languages/container'
import CalculatorContainer from './calculator/container'
import SimonContainer from './simon/container'
import AwardsContainer from './awards/container'
import EducationContainer from './education/container'
import LeadershipContainer from './leadership/container'
import WorkContainer from './work/container'
import Separator from './shared/Separator'
import InterculturalContainer from './intercultural/container'
import Footer from './footer/index'

function App() {
  return (
    <div className="App">
      <Header />
      <LanguagesContainer />
      <ProjectsContainer />
      <Separator />
      <SimonContainer />
      <Separator />
      <CalculatorContainer />
      <Separator />
      <WorkContainer />
      <LeadershipContainer />
      <EducationContainer />
      <AwardsContainer />
      <InterculturalContainer />
      <CertificatesContainer />
      <Footer />
    </div>
  );
}

export default App;
