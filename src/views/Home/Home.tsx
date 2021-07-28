import React from "react";
import {
  Header,
  Footer,
  Navigation,
  FieldsOfSpecialty,
  AboutMe,
  Contact,
} from "../../components";

export const Home: React.FC = () => (
  <React.Fragment>
    <Navigation />
    <Header />
    <FieldsOfSpecialty />
    <AboutMe />
    <Contact />
  </React.Fragment>
);
