import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import { rhythm } from '../utils/typography'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => (
  <Container colors={data.site.siteMetadata.colors}>
    <Layout
      title={data.site.siteMetadata.title}
      pages={data.site.siteMetadata.pages}
      colors={data.site.siteMetadata.colors}
    >
      <h2 style={{ fontWeight: 'normal' }}>Hi!</h2>
      <h1 style={{ fontSize: rhythm(3) }}>
        I'm{' '}
        <span style={{ color: data.site.siteMetadata.colors.darkGrey }}>
          Dave Hoeks
        </span>
        . Born &amp; based in The Netherlands. Interested in all things
        digital. Freelance Web Designer (hire me). Beekeper and avid surfer.{' '}
      </h1>
      <p>test</p>
      <p>Now go build something great.</p>
    </Layout>
  </Container>
)

export default IndexPage

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
