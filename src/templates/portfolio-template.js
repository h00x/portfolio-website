import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import { rhythm } from '../utils/typography'
import { graphql } from 'gatsby'

const PortfolioItem = ({ data }) => (
  <Container colors={data.site.siteMetadata.colors}>
    <Layout
      title={data.site.siteMetadata.title}
      pages={data.site.siteMetadata.pages}
      colors={data.site.siteMetadata.colors}
    >
      <h1>{data.itemData.title}</h1>
      <p style={{ marginTop: rhythm(1) }}>{data.itemData.acf.intro_text}</p>
      {console.log(data)}
    </Layout>
  </Container>
)

export default PortfolioItem

export const query = graphql`
query ($id: Int!){
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
  itemData: wordpressWpPortfolio(wordpress_id: {eq: $id}) {
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
`