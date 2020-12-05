import React, { Suspense, useEffect, useState } from "react";
import About from "./Container/AboutUs";
import Services from "./Container/Services/index";
import Portfolio from "./Container/Portfolio/index";
import Blog from "./Container/Blog";
import Contact from "./Container/Contact/index";
import Error from "./Container/Error";
import Loader from "react-loader-spinner";
import { Route, Switch, useLocation } from "react-router-dom";
import 'firebase/firestore';
import "./App.css";
import {AnimatePresence, motion} from "framer-motion";

import Navbar from "./Components/Navbar";
import Bottom from "./Components/Bottom";
import Home from "./Container/Home";
import Handles from "./Components/Handles";

import Carousel from "./Components/Carousel";
import firebase from "./Utils/firebase";

const pageVariants={
  initial:{
    opacity:0,
    x:"-100vw",
    scale:0.8
  },
  in: {
    opacity:1,
    x: 0,
    scale:1
  },
  out:{
    opacity:0,
    x:"-100vw",
    scale:1.2
  }
};

const pageTransition = {
type: "spring",
stiffness: 500,
duration: 0.5
}

// const pageStyle={
//   position: 'absolute'
// }

const LoadingIcon = (
  <Loader
    className="loader"
    type="Grid"
    color="#2b6b68"
    height={80}
    width={80}
  />
);

function App() {
  const location=useLocation();

  const fetchData = async () => {
    const db = firebase.firestore();
    
    console.log("herer");
  }


  const [user, setUser] = useState([]);
  // useEffect(() => {},[])
  useEffect(() => {
    
    fetchData();
  },[]);
  const [loading, setLoading] = useState(false);
  console.log(user);
  return (
    <motion.div 
    // style={pageStyle}
    clasName="row_transition"
    initial="initial"
    exit="out"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
     >
    <main >
      <Navbar />

      <div className="main-wrapper">
        <AnimatePresence >
        <Switch 
        location={location} key={location.pathname}
        >
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
        </AnimatePresence>
        
      </div>
      
      <Bottom />
      <Handles/>
    </main>
    </motion.div>
  );
}

export default App;
