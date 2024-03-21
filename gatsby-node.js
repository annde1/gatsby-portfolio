const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query MyQuery {
      allDataJson {
        nodes {
          id
          title
          price
          description
        }
      }
    }
  `); //pass in query

  console.log("DATA", data);
  data.allDataJson.nodes.forEach((node) => {
    actions.createPage({
      path: "/projects/" + node.id, //create path fo each page (must be unique)
      component: path.resolve("/src/templates/product-details.js"),
      context: {
        node: node,
      }, //passing data to the template componenent
    });
  });
};
