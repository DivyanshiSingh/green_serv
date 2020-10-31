import React from 'react';
import Home from './Container/Home';
import About from './Container/AboutUs';
import Services from './Container/Services/index';
import Portfolio from './Container/Portfolio/index';
import Blog from './Container/Blog';
import Contact from './Container/Contact';
import Error from './Container/Error';

import { Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
      <main>
        <Navbar/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />        
        </Switch>
      </main>
  )
}
export default App;
