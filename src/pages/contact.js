import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import { rhythm } from '../utils/typography'
import { graphql } from 'gatsby'

const ContactPage = ({ data }) => (
  <Container colors={data.site.siteMetadata.colors}>
    <Layout
      title={data.site.siteMetadata.title}
      pages={data.site.siteMetadata.pages}
      colors={data.site.siteMetadata.colors}
    >
      <h1>{data.site.siteMetadata.pages.contact.name}</h1>
      <p style={{ marginTop: rhythm(3) }}>Come in contact with me</p>
      <p>Now go build something great.</p>
    </Layout>
  </Container>
)

export default ContactPage

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
  }
`
