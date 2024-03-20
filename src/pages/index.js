import * as React from "react";
import Layout from "../components/Layout";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <div>
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
          <img src="/banner.png" alt="banner" style={{ maxWidth: "40%" }} />
        </div>
      </Layout>
    </div>
  );
}
