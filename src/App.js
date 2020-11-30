import React, { Suspense, useEffect, useState } from "react";
import About from "./Container/AboutUs";
import Services from "./Container/Services/index";
import Portfolio from "./Container/Portfolio/index";
import Blog from "./Container/Blog";
import Contact from "./Container/Contact/index";
import Error from "./Container/Error";
import Loader from "react-loader-spinner";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Navbar from "./Components/Navbar";
import Bottom from "./Components/Bottom";
import Home from "./Container/Home";
import Carousel from "./Components/Carousel";
import firebase from "./Utils/firebase";
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
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("user").get();
      // console.log(data.data());
      // setUser(data.map(doc => doc.data()));
    //   db.collection("user").add({
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    // })
    // .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function(error) {
    //     console.error("Error adding document: ", error);
    // });
    }
    fetchData();
  },[]);
  const [loading, setLoading] = useState(false);
  console.log(user);
  return (
    <main>
      <Navbar />

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
    </main>
  );
}
export default App;
