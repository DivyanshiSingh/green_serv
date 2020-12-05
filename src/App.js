import React, { Suspense, useEffect, useState } from "react";
import About from "./Container/AboutUs";
import Services from "./Container/Services/index";
import Portfolio from "./Container/Portfolio/index";
import Blog from "./Container/Blog";
import Contact from "./Container/Contact/index";
import Error from "./Container/Error";
import Loader from "react-loader-spinner";
import { Route, Switch } from "react-router-dom";
import "firebase/firestore";
import "./App.css";
import Navbar from "./Components/Navbar";
import Bottom from "./Components/Bottom";
import Home from "./Container/Home";
import firebase from "./Utils/firebase";
import Handles from "./Components/Handles";
import Sidepanel from "./Components/Sidepanel";
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
  const fetchData = async () => {
    const db = firebase.firestore();
    // const data = await db.collection("users").get();
    // console.log(data.data());
    // setUser(data.map(doc => doc.data()));
    console.log("herer");
  };

  const [user, setUser] = useState([]);
  // useEffect(() => {},[])
  useEffect(() => {
    fetchData();
  }, []);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <main>
      <Navbar />
      <Sidepanel/>
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

      <Bottom />
      <Handles />
    </main>
  );
}
export default App;
