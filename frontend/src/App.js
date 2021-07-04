
import React from 'react';

//Global Style
import GlobalStyle from './components/GlobalStyle';

import { Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

//components
import AboutUs from './pages/AboutUs';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import Nav from './components/Nav';

function App() {
  library.add(fab);
  return (
    <div>
      <GlobalStyle/>
      <Nav />
      <Switch>
        <Route exact path="/">
          <AboutUs />
        </Route>
        <Route path={['/portfolio:id', '/portfolio']}>
          <Portfolio/>
        </Route>
        <Route path="/contact">
           <ContactMe/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
