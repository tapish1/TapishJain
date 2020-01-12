import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import AboutMe from "./about";
import Projects from "./projects";
import ContactMe from "./contact";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={AboutMe} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={ContactMe} />
  </Switch>
);

export default Main;
