import React, { Suspense, useState } from 'react';
import About from './Container/AboutUs';
import Services from './Container/Services/index';
import Portfolio from './Container/Portfolio';
import Blog from './Container/Blog';
import Contact from './Container/Contact';
import Error from './Container/Error';
import Loader from 'react-loader-spinner'
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar';
import Bottom from './Components/Bottom';
import Home from './Container/Home';
// import Loading from './images/loading.gif'
// const Home = React.lazy(() => import('./Container/Home'));
const LoadingIcon = <Loader className="loader" type="Grid" color="#2b6b68" height={80} width={80} />
function App() {
  const [loading, setLoading] = useState(false);
  return (
  loading ? <div>{LoadingIcon}</div>:
      <main>
        
        <Navbar/>
        <div className="main-wrapper">
        
        <Switch>

          
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />        
        </Switch>

        </div>
        <Bottom/>
      </main>
  )
}
export default App;
