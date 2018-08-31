import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import { rhythm } from '../utils/typography'
import { graphql } from 'gatsby'

let getObj = (obj) => { 
  obj.forEach(arr => {
    if (arr.node.wordpress_id === 12){
      console.log(arr)
    }
  })
}

const PortfolioItem = ({ data }) => (
  <Container colors={data.site.siteMetadata.colors}>
    <Layout
      title={data.site.siteMetadata.title}
      pages={data.site.siteMetadata.pages}
      colors={data.site.siteMetadata.colors}
    >
      <h1>Portfolio item</h1>
      <p style={{ marginTop: rhythm(3) }}>Beautifull pictures</p>
      {getObj(data.allWordpressWpPortfolio.edges)}
    </Layout>
  </Container>
)

export default PortfolioItem

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        pages {
          home {
            name
            url
          }
          aboutDave {
            name
            url
          }
          portfolio {
            name
            url
          }
          contact {
            name
            url
          }
        }
        colors {
          darkGrey
          creme
          lightGreen
          darkGreen
          pink
        }
      }
    }
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
