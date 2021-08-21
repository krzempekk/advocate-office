import React from "react";
import { HomePage, AboutPage, ContactPage, ServicesPage } from "./views";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Header, Navigation } from "./components";

export const Root: React.FC = () => (
  <HashRouter>
    <Navigation />
    <Header />
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      <Route exact path="/contact">
        <ContactPage />
      </Route>
      <Route exact path="/services">
        <ServicesPage />
      </Route>
    </Switch>
  </HashRouter>
);
