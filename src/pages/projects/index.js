import React from "react";
import Layout from "../../components/Layout";
import "../../styles/projects.module.css";
function Projects() {
  return (
    <Layout>
      <h1
        style={{
          textAlign: "center",
          marginTop: "2rem",
          fontWeight: "bold",
          color: "#FF204E",
        }}
      >
        Portfolio
      </h1>
      <h2 style={{ textAlign: "center" }}>
        Projects & Websites I've Created 👩‍💻
      </h2>
    </Layout>
  );
}

export default Projects;
