import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

import './App.css';

const Home = React.lazy(() => {
  return import('./pages/Home/Home');
});

const Art = React.lazy(() => {
  return import('./pages/Art/Art');
});

const Math = React.lazy(() => {
  return import('./pages/Math/Math');
});

const DigitalDrawings = React.lazy(() => {
  return import('./pages/Art/DigitalDrawings/DigitalDrawings');
});

const PrimeNumbers = React.lazy(() => {
  return import('./pages/Math/PrimeNumbers/PrimeNumbers');
});

const Contact = React.lazy(() => {
  return import('./pages/Contact/Contact');
});

const UnderConstruction = React.lazy(() => {
  return import('./pages/Other/UnderConstruction');
})

const App = () => {

  let routes = (
    <Switch>
       <Route path="/under_construction" render={(props) => <UnderConstruction {...props}/>} />
       <Route path="/contact" render={(props) => <Contact {...props}/>} />
       <Route path="/art/digital" render={(props) => <DigitalDrawings {...props}/>} />
       <Route path="/math/prime" render={(props) => <PrimeNumbers {...props}/>} />
       <Route path="/math" render={(props) => <Math {...props}/>} />
       <Route path="/art" render={(props) => <Art {...props}/>} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
    </Switch>
  );
 
  return (
    <div className="App">
      <Layout>
      <Suspense fallback={<p>Loading...</p>}>
          {routes}
        </Suspense>
      </Layout>
    </div>
  );
}

export default withRouter(App);
