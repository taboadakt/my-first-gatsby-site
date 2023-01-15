// Step 1: Import React
import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="Waterfall image" src="../images/waterfall.jpg" />
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

// Step 3: Export your component
export default IndexPage;
