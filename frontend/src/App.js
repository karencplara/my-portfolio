
import React from 'react';

//Global Style
import GlobalStyle from './components/GlobalStyle';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import AboutUs from './pages/AboutUs';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <AboutUs />
        </Route>
        <Route path="/portfolio">
           <Portfolio/>
        </Route>
        <Route path="/contact">
           <ContactMe/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
