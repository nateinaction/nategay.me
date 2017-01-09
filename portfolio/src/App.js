import React from 'react';
import ProjectsContainer from './containers/ProjectsContainer'
import CalculatorDisplayContainer from './containers/CalculatorDisplayContainer'
import CalculatorButtonsContainer from './containers/CalculatorButtonsContainer'
import Header from './components/Header'
import Footer from './components/Footer'

const App = (props) => (
  <div className="App">
    <Header />
    <ProjectsContainer />
    <Footer />
    <CalculatorDisplayContainer />
    <CalculatorButtonsContainer />
  </div>
)

export default App;
