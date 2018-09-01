import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import { rhythm } from '../utils/typography'
import { graphql } from 'gatsby'
import BottomCTA from '../components/bottom-c2a'
import PortfolioList from '../components/portfolio-list'

const PortfolioPage = ({ data }) => (
  <Container colors={data.site.siteMetadata.colors}>
    <Layout
      title={data.site.siteMetadata.title}
      pages={data.site.siteMetadata.pages}
      colors={data.site.siteMetadata.colors}
    >
      <div style={{textAlign: "center"}}>
        <h1>{data.site.siteMetadata.pages.portfolio.name}</h1>
        <p style={{ marginTop: rhythm(1), marginBottom: rhythm(2)  }}>Beautifull pictures</p>
      </div>
      <PortfolioList obj={data.portfolioItems.edges} three={false} />
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

export default PortfolioPage

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
    portfolioItems: allWordpressWpPortfolio(
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          wordpress_id
          slug
          date
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
