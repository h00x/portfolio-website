import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import Button from '../components/button'
import { rhythm } from '../utils/typography'
import { Link, graphql } from 'gatsby'

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
        <Link
          to={data.site.siteMetadata.pages.aboutDave.url}
          style={{ color: data.site.siteMetadata.colors.darkGrey, fontWeight: "700" }}
        >
          Dave Hoeks
        </Link>
        . Born &amp; based in The Netherlands. Interested in all things digital.
        Freelance Web Designer{' '}
        <Link
          to={data.site.siteMetadata.pages.contact.url}
          style={{
            color: data.site.siteMetadata.colors.darkGrey,
            fontSize: rhythm(1.5),
            fontWeight: '700',
          }}
        >
          (hire me)
        </Link>
        . Beekeper and avid surfer.{' '}
      </h1>
      <h2 style={{ fontSize: rhythm(1.5), fontWeight: '400' }}>
        Currently working at{' '}
        <Link
          to={data.site.siteMetadata.pages.contact.url}
          style={{ color: data.site.siteMetadata.colors.darkGrey }}
        >
          Hellodialog.com
        </Link>
      </h2>
      <div style={{width: '100%', textAlign: 'center', marginTop: rhythm(3)}}>
        <h2 style={{ fontWeight: 'normal', marginBottom: rhythm(1) }}>Do you need a website?</h2>
        <Button
          link={data.site.siteMetadata.pages.contact.url}
          text="Get in touch"
          color={data.site.siteMetadata.colors.darkGrey}
          hoverColor={data.site.siteMetadata.colors.creme}
        />
      </div>
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
