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
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
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
        paddingBottom: rhythm(2),
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
