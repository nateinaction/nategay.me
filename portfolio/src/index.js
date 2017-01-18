import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css';

import Header from './header/index'
//import ProjectsContainer from './projects/container'
import CertificatesContainer from './certificates/container'
import LanguagesAndInterestsContainer from './languagesAndInterests/container'
import CalculatorContainer from './calculator/container'
import SimonContainer from './simon/container'
import WeatherContainer from './weather/container'
import Footer from './footer/index'

const App = (props) => (
  <div className="App">
    <Header />
    <WeatherContainer />
    <LanguagesAndInterestsContainer />
    <SimonContainer />
    <CertificatesContainer />
    <CalculatorContainer />
    <Footer />
  </div>
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
