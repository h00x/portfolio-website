import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import { rhythm } from '../utils/typography'
import { Link, graphql } from 'gatsby'

const ContactPage = ({ data }) => (
  <Container colors={data.site.siteMetadata.colors}>
    <Layout
      title={data.site.siteMetadata.title}
      pages={data.site.siteMetadata.pages}
      colors={data.site.siteMetadata.colors}
    >
      <h1>{data.site.siteMetadata.pages.contact.name}</h1>
      <p style={{ marginTop: rhythm(1) }}>Come in contact with me</p>
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field"  action="/success/" >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
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
