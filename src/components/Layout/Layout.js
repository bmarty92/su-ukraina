import * as React from "react";
import PropTypes from "prop-types";

import Header from "../Header";
import Footer from "../Footer";
import ContactForm from "../ContactForm";
import Constraint from "../Constraint";
import Section from "../Section";

import "./Layout.css";


/*
      <html lang="lt" />
      */

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      
      <main>{children}</main>

      <Section bgColor="blue">
        <Constraint>
          <ContactForm />
        </Constraint>
      </Section>
     
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
