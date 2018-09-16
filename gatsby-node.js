const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(
      `
      {
        allWordpressWpPortfolio {
          edges {
            node {
              wordpress_id
              slug
            }
          }
        }
      }
      `
    )
    .then(result => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }
      result.data.allWordpressWpPortfolio.edges.forEach(({ node }) => {
        createPage({
          path: `/portfolio/${node.slug}/`,
          component: path.resolve(`./src/templates/portfolio-template.js`),
          context: {
            id: node.wordpress_id,
          },
        });
      })
      resolve();
    })
  })
}