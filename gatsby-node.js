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
              date
              status
              title
              slug
              acf {
                intro_text
                featured_image {
                  source_url
                }
                portfolio_image_1 {
                   source_url
                }
                portfolio_text_1
              }
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
          path: `/${node.slug}/`,
          component: path.resolve(`./src/templates/portfolio-template.js`),
          // If you have a layout component at src/layouts/blog-layout.js
          context: {
            id: node.wordpress_id,
          },
        });
      })
      resolve();
    })
  })
}