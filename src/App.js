import React, { Suspense, useEffect, useState } from "react";
import About from "./Container/AboutUs";
import Services from "./Container/Services/index";
import Portfolio from "./Container/Portfolio/index";
import Blog from "./Container/Blog";
import Contact from "./Container/Contact/index";
import Error from "./Container/Error";
import { Route, Switch, useLocation } from "react-router-dom";
import "firebase/firestore";
import "./App.css";
import Navbar from "./Components/Navbar";
import Bottom from "./Components/Bottom";
import Home from "./Container/Home";
import firebase from "./Utils/firebase";
import Handles from "./Components/Handles";
import Sidepanel from "./Components/Sidepanel";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  const fetchData = async () => {
    const db = firebase.firestore();
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <main>
        <Navbar />
        <Sidepanel />

        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </AnimatePresence>
        {!location.pathname.includes("/contact") && <Handles />}
      </main>
      <footer>{location.pathname !== "/portfolio" ? <Bottom /> : null}</footer>
    </>
  );
}
export default App;
