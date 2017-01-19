import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css';

import Header from './header/index'
import CertificatesContainer from './certificates/container'
import LanguagesContainer from './languages/container'
import CalculatorContainer from './calculator/container'
import SimonContainer from './simon/container'
import WeatherContainer from './weather/container'
import AwardsContainer from './awards/container'
import EducationContainer from './education/container'
import Footer from './footer/index'

const App = (props) => (
  <div className="App">
    <Header />
    <LanguagesContainer />
    <WeatherContainer />
    <SimonContainer />
    <CalculatorContainer />
    <EducationContainer />
    <AwardsContainer />
    <CertificatesContainer />
    <Footer />
  </div>
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
