import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import { graphql } from 'gatsby'

const NotFoundPage = ({ data }) => (
  <Container colors={data.site.siteMetadata.colors} title={data.site.siteMetadata.title}>
    <Layout
      pages={data.site.siteMetadata.pages}
      colors={data.site.siteMetadata.colors}
    >
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </Container>
)

export default NotFoundPage

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
    allWordpressPage {
      edges {
        node {
          content
        }
      }
    }
  }
`