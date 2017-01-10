import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css';

import ProjectsContainer from './projects/container'
import CertificatesContainer from './certificates/container'
import LanguagesAndInterestsContainer from './languagesAndInterests/container'
//import CalculatorDisplayContainer from './containers/CalculatorDisplayContainer'
//import CalculatorButtonsContainer from './containers/CalculatorButtonsContainer'
import Header from './header/index'
import Footer from './footer/index'

const App = (props) => (
  <div className="App">
    <Header />
    <CertificatesContainer />
    <LanguagesAndInterestsContainer />
    <ProjectsContainer />
    <Footer />
  </div>
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
