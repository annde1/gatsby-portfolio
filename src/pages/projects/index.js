import React from "react";
import Layout from "../../components/Layout";
import "../../styles/projects.module.css";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import CardComponent from "../../components/Card";
function Projects({ data }) {
  console.log(data);
  const products = data.allDataJson.nodes;
  return (
    <Layout>
      <h1
        style={{
          textAlign: "center",
          marginTop: "2rem",
          fontWeight: "bold",
        }}
      >
        Products 🛒
      </h1>

      <Container style={{ marginTop: "3rem" }}>
        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} xs={12} md={3}>
              <CardComponent
                title={product.title}
                description={product.description}
                price={product.price}
                id={product.id}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}

export default Projects;

///Making multiple queries
export const query = graphql`
  query Products {
    allDataJson {
      nodes {
        description
        title
        price
        id
      }
    }
    filteredData: allDataJson(sort: { price: DESC }) {
      nodes {
        description
        id
        price
        title
      }
    }
  }
`;
