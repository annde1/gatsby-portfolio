import * as React from "react";
import Layout from "../components/Layout";
import Button from "react-bootstrap/Button";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Container from "react-bootstrap/Container";

export default function Home(props) {
  const image = getImage(props.data.file);
  console.log(image);
  return (
    <Container fluid>
      <Layout>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "4rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 style={{ textAlign: "center" }}>Develop & Deploy</h2>
            <Button
              style={{
                backgroundColor: "#FF204E",
                borderColor: "#FF204E",
                marginTop: "1rem",
              }}
            >
              My Portfolio Projects
            </Button>
          </div>
          <GatsbyImage image={image} alt="banner" />
        </div>
      </Layout>
    </Container>
  );
}
export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 400
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;
