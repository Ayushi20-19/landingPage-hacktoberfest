import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import Home from "./components/Hero/Home";
import Contact from "./components/Contact/Contact";
import About from "./About";
import Services from "./Services";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./Footer";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Contact' component={Contact} />
        <Route exact path='/about' component={About} />
        <Route exact path='/service' component={Services} />
        <Redirect to='/' />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
