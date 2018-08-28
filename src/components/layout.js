import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { rhythm } from "../utils/typography"
import Header from './header'
import Footer from './footer'

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
    <Header pages={pages} colors={colors}/>
    <section
      style={{
        margin: '0 auto',
        maxWidth: 960,
        paddingBottom: rhythm(2),
        paddingTop: rhythm(2),
      }}
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
