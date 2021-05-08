import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/homedefault/banner";
import About from "../components/homedefault/about";
import Project from "../components/homedefault/project";
import Brand from "../components/homedefault/brand";
import Contact from "../elements/contact/contact";

const IndexPage = () => (
  <Layout>
    <SEO title="Waxon" />
    <Banner />
    <About />
    <div className="portfolio-id" id="portfolio">
      <Project />
      <Brand />
    </div>
    <Contact />
  </Layout>
)
export default IndexPage;