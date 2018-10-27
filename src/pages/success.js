import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import { graphql } from 'gatsby'

const SuccessPage = ({ data }) => (
  <Container colors={data.site.siteMetadata.colors} title={data.site.siteMetadata.title}>
    <Layout
      pages={data.site.siteMetadata.pages}
      colors={data.site.siteMetadata.colors}
    >
      <h1>Success!</h1>
      <p>You've submitted your request</p>
    </Layout>
  </Container>
)

export default SuccessPage

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