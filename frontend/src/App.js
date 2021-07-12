
import React from 'react';

//Global Style
import GlobalStyle from './components/GlobalStyle';

import { Route, Switch, useLocation } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

//components
import AboutUs from './pages/AboutUs';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import Nav from './components/Nav';
import Admin from './pages/Admin';
import { SignupForm, LoginForm } from './components/auth/Authentication';

function App() {
  const location = useLocation();
  library.add(fab);

  return (
    <div>
      <GlobalStyle/>
      {location.pathname !== '/admin' && <Nav />}
      <Switch>
        <Route exact path="/" component={AboutUs}/>
        <Route path={['/portfolio:id', '/portfolio']} component={Portfolio}/>
        <Route path="/contact" component={ContactMe} />
		<Route path="/admin" component={Admin} />
		<Route path="/signup" component={SignupForm} />
		<Route path="/login" component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
