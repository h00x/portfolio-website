import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import { rhythm } from '../utils/typography'
import { graphql } from 'gatsby'

const PortfolioPage = ({ data }) => (
  <Container colors={data.site.siteMetadata.colors}>
    <Layout
      title={data.site.siteMetadata.title}
      pages={data.site.siteMetadata.pages}
      colors={data.site.siteMetadata.colors}
    >
      <h1>Portfolio</h1>
      <p>Beautifull pictures</p>
      <p>Now go build something great.</p>
    </Layout>
  </Container>
)

export default PortfolioPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        pages {
          name
          url
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
  }
`
