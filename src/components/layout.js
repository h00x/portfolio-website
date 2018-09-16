import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import Waypoint from 'react-waypoint';
import { rhythm } from "../utils/typography"
import Header from './header'
import Footer from './footer'
import { css } from 'react-emotion'

// let stickyNav = false;

const Layout = ({ children, title, pages, colors }) => (
  <>
    <Helmet
      title={title}
    >
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="description" content="The portfolio website of Dave Hoeks. An experienced Webdesigner with a history of working in the marketing and advertising industry."/>
      <meta name="keywords" content="portfolio, dave, hoeks, webdesign, websites, design"/>
      <meta name="google-site-verification" content="ZAvQIhYtBxI5YhtJcToCQKfP55g15VKZ-A9Ew6Qwe5Q" />
    </Helmet>
    <Header pages={pages} colors={colors} />
    {/* <Waypoint
      onEnter={stickyNav = false}
      onLeave={stickyNav = true}
    /> */}
    <section
      style={{
        margin: '0 auto',
        maxWidth: 960,
        paddingBottom: rhythm(4),
        paddingTop: rhythm(2),
        overflow: 'auto' 
      }}
      className={css`
        @media (max-width: 1040px) {
          padding: 0 ${rhythm(1)};
        }
      `}
    >
      {children}
    </section>
    <Footer pages={pages} colors={colors} />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
