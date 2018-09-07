import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import { rhythm } from '../utils/typography'
import { graphql } from 'gatsby'
import { css } from 'react-emotion'
import './contact.css'

const ContactPage = ({ data }) => (
  <Container colors={data.site.siteMetadata.colors}>
    <Layout
      title={data.site.siteMetadata.title}
      pages={data.site.siteMetadata.pages}
      colors={data.site.siteMetadata.colors}
    >
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
        <h1>{data.site.siteMetadata.pages.contact.name}</h1>
        <p style={{ marginTop: rhythm(1) }}>What do you want to tell me?</p>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/success/"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="FormGroup">
            <input
              type="text"
              name="name"
              id="name"
              className="FormControl"
              required
            />
            <label className="FormControlPlaceholder" htmlFor="name">
              Your Name
            </label>
          </div>
          <div className="FormGroup">
            <input
              type="text"
              name="email"
              id="email"
              className="FormControl"
              required
            />
            <label className="FormControlPlaceholder" htmlFor="email">
              Your Email
            </label>
          </div>
          <div className="FormGroup">
            <textarea
              name="message"
              id="message"
              className="FormControl"
              required
            />
            <label className="FormControlPlaceholder" htmlFor="message">
              Message
            </label>
          </div>
          <div>
            <button
              type="submit"
              className={css`
              display: inline-block;
              border: 2px solid ${data.site.siteMetadata.colors.darkGrey};
              padding: ${rhythm(0.5)} ${rhythm(1)};
              background: ${data.site.siteMetadata.colors.darkGrey};
              color: ${data.site.siteMetadata.colors.creme};
              margin: 0;
              text-decoration: none;
              font-family: sans-serif;
              font-size: 1rem;
              cursor: pointer;
              text-align: center;
              transition: opacity 0.1s ease-in-out;
              width: 100%;
              border-radius: 4px;
              -webkit-appearance: none;
              -moz-appearance: none;
          }

          &:hover,
          &:focus {
              opacity: 0.8;
          }

          &:focus {
              outline: 1px solid #fff;
              outline-offset: -4px;
          }

          &:active {
              transform: scale(0.99);
          }`}
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div
        className={css`
          width: 30%;
          display: inline-block;
          float: left;
          @media (max-width: 1040px) {
            width: 100%;
          }
        `}
      >
        <h2>Contact details</h2>
        <p>
          Email me:{' '}
          <a
            href="mailto:dave@unnatural.nl"
            style={{ color: data.site.siteMetadata.colors.darkGrey }}
          >
            dave@unnatural.nl
          </a>
        </p>
        <p>
          Call me:{' '}
          <a
            href="tel:0031644106277"
            style={{ color: data.site.siteMetadata.colors.darkGrey }}
          >
            +31 6 44106277
          </a>
        </p>
      </div>
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
