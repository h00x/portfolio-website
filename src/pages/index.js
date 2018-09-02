import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import BottomCTA from '../components/bottom-c2a'
import { rhythm } from '../utils/typography'
import { Link, graphql } from 'gatsby'
import PortfolioList from '../components/portfolio-list'

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
      <h2 style={{ fontSize: rhythm(1.5), fontWeight: '400', marginBottom: rhythm(3) }}>
        Currently working at{' '}
        <Link
          to={data.site.siteMetadata.pages.contact.url}
          style={{ color: data.site.siteMetadata.colors.darkGrey }}
        >
          Hellodialog.com
        </Link>
      </h2>
      <h2>Latest work</h2>
      <PortfolioList obj={data.portfolioItems.edges} three={true} colors={data.site.siteMetadata.colors} />
      <BottomCTA
        link={data.site.siteMetadata.pages.contact.url}
        buttonText="Get in touch"
        titleText="Do you need a website?"
        color={data.site.siteMetadata.colors.darkGrey}
        hoverColor={data.site.siteMetadata.colors.creme}
      />
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
    allWordpressPage {
      edges {
        node {
          content
        }
      }
    }
    portfolioItems: allWordpressWpPortfolio(
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          wordpress_id
          slug
          date
          title
          acf {
            featured_image {
              localFile {
                childImageSharp {
                  sizes(maxWidth: 960, quality: 80) {
                    ...GatsbyImageSharpSizes_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
