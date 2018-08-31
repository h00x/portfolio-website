import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import { rhythm } from '../utils/typography'
import { graphql } from 'gatsby'
import Img from "gatsby-image";

const generateImageList = (obj) => {
  let imgList = obj.map((item, index) => {
    return <Img key={index} sizes={item.image.localFile.childImageSharp.sizes} />
  });
  return imgList;
}

const PortfolioItem = ({ data }) => (
  <Container colors={data.site.siteMetadata.colors}>
    <Layout
      title={data.site.siteMetadata.title}
      pages={data.site.siteMetadata.pages}
      colors={data.site.siteMetadata.colors}
    >
      <h1>{data.itemData.title}</h1>
      <p style={{ marginTop: rhythm(1) }}>{data.itemData.acf.intro_text}</p>
      {generateImageList(data.itemData.acf.portfolio_images)}
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
      portfolio_images {
        image {
          localFile {
            childImageSharp {
              sizes(maxWidth: 960, quality: 80) {
                ...GatsbyImageSharpSizes_withWebp
              }
            }
          }
        }
        text
      }
    }
  }

}
`