import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
const Navigation = () => {
  //Static query - use in components, you cannot use query variables unlike in page queries. You can only use it once inside a component
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;
  return (
    <Navbar>
      <Container>
        <Navbar.Brand className="text-light">{title}</Navbar.Brand>
        <Nav className="me-auto ">
          <Nav.Link as={Link} to="/" className="text-light">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="text-light">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/projects" className="text-light">
            Projects
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Navigation;
