import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import { rhythm } from '../utils/typography'
import { graphql } from 'gatsby'
import BottomCTA from '../components/bottom-c2a'
import { css } from 'react-emotion'
import Img from 'gatsby-image'

const AboutMePage = ({ data }) => (
  <Container colors={data.site.siteMetadata.colors} title={data.site.siteMetadata.title}>
    <Layout
      pages={data.site.siteMetadata.pages}
      colors={data.site.siteMetadata.colors}
    >
      <h1 className={css`
          margin-bottom: 0;
        `}>{data.site.siteMetadata.pages.aboutDave.name}</h1>
      <div
        className={css`
          width: 70%;
          display: inline-block;
          float: left;
          padding-right: ${rhythm(2)};
          @media (max-width: 1040px) {
            width: 100%;
            padding: 0;
          }
        `}
      >
        <p style={{ marginTop: rhythm(1), marginBottom: rhythm(2) }}>
          {data.wordpressPage.acf.about_text}
        </p>
        <div
          style={{
            display: 'inline-block',
            float: 'left',
            marginRight: rhythm(2),
          }}
          className={css`
          display: inline-block;
          float: left;
          margin-right: ${rhythm(2)};
          @media (max-width: 1040px) {
            margin: 0;
          }
        `}
        >
          <h2>Skills</h2>
          <ul>
            {data.wordpressPage.acf.skilled_at.map((item, index) => (
              <li key={index}>{item.skill}</li>
            ))}
          </ul>
        </div>
        <div style={{ display: 'inline-block', float: 'left' }}>
          <h2>Hobbies</h2>
          <ul>
            {data.wordpressPage.acf.hobbies.map((item, index) => (
              <li key={index}>{item.hobby}</li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={css`
          width: 30%;
          display: inline-block;
          float: left;
          margin-top: ${rhythm(1)};
          @media (max-width: 1040px) {
            width: 100%;
          }
        `}
      >
        <Img
          sizes={
            data.wordpressPage.acf.about_photo.localFile.childImageSharp.sizes
          }
          style={{ borderRadius: '50%' }}
          className={css`
          @media (max-width: 1040px) {
            margin 0 auto;
            width: 30%;
          }
          @media (max-width: 720px) {
            margin 0 auto;
            width: 60%;
          }
          @media (max-width: 500px) {
            width: 100%;
          }
          `}
        />
      </div>
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

export default AboutMePage

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
    wordpressPage(wordpress_id: { eq: 43 }) {
      title
      acf {
        about_text
        skilled_at {
          skill
        }
        hobbies {
          hobby
        }
        about_photo {
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
`
