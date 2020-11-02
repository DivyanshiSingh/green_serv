import React from 'react';
import Home from './Container/Home';
import About from './Container/AboutUs';
import Services from './Container/Services/index';
import Portfolio from './Container/Portfolio/index';
import Blog from './Container/Blog';
import Contact from './Container/Contact';
import Error from './Container/Error';
// import { Cube } from 'styled-loaders-react';

import { Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar';
import Bottom from './Components/Bottom';
// import CubeGrid from 'styled-loaders-react/lib/components/CubeGrid';

function App() {
  // state= {
  //   loading:true
  // }
  // componentDidMount=()=>{
  //   setTimeout(()=>{
  //     this.setState({
  //       loading:false
  //     })
  //   },3000)
  // }
  return (
      <main>
        {/* <div className="app">
          {
            this.state.loading ? <CubeGrid color="green" /> : "Your content"
          }
        </div> */}
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
