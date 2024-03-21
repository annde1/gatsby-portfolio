import React from "react";
import Layout from "../components/Layout";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
const ProductDetails = () => {
  //Template components
  return (
    <Layout>
      <div>
        <GatsbyImage />
        <h2>Item</h2>
        <p>Title: </p>
        <p>Description: </p>
        <p>Price: </p>
      </div>
    </Layout>
  );
};
export default ProductDetails;
///gatsby-node.js file that will generate pages from the template
