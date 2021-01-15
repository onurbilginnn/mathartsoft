import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

import './App.css';

const Home = React.lazy(() => {
  return import('./pages/Home/Home');
});

const Plugins = React.lazy(() => {
  return import('./pages/Plugins/Plugins');
});

const Services = React.lazy(() => {
  return import('./pages/Services/Services');
});

const About = React.lazy(() => {
  return import('./pages/About/About');
});


const Contact = React.lazy(() => {
  return import('./pages/Contact/Contact');
})

const App = () => {

  let routes = (
    <Switch>
       <Route path="/contact" render={(props) => <Contact {...props}/>} />
       <Route path="/plugins" render={(props) => <Plugins {...props}/>} />
       <Route path="/services" render={(props) => <Services {...props}/>} />
       <Route path="/about" render={(props) => <About {...props}/>} />
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
