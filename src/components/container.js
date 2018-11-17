import React from 'react'
import BgImage from '../images/stars-bg.jpg'
import Helmet from 'react-helmet'
import './container.css'
import { rhythm } from '../utils/typography'
import { css } from "react-emotion";

const Container = ({ children, colors, title }) => (
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
    <div
      className={css`
        background-image: url(${BgImage});
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-color: ${colors.lightGreen};
        min-height: 100%;
        border-top: 1rem solid ${colors.creme};
        border-right: 1rem solid ${colors.creme};
        border-left: 1rem solid ${colors.creme};
        position: relative;
        padding-bottom: ${rhythm(3)}
        @media (max-width: 1040px) {
          padding-bottom: 0;
        }
      `}
    >
      {children}
    </div>
  </>
)

export default Container
