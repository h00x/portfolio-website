import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'
import { css } from "react-emotion";

import logoImg from '../images/unnatural-logo.svg'

const Header = ({ pages, colors }) => (
  <nav
    style={{
      margin: '0 auto',
      maxWidth: 960,
      paddingTop: rhythm(3),
      paddingBottom: rhythm(3),
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Link
      to="/"
      style={{
        color: 'white',
        textDecoration: 'none',
        display: 'inline-block',
      }}
    >
      <img
        src={logoImg}
        alt="Unnatural logo"
        width="175"
        height="67"
        style={{ margin: 0, marginRight: rhythm(2), display: 'inline-block' }}
      />
    </Link>
    <ul
      style={{
        listStyle: 'none',
        margin: '0',
        display: 'inline-block',
      }}
    >
      {Object.keys(pages).map((item, index) => {
        let page = pages[item]
        return (
          <li
            key={index}
            style={{
              display: 'inline-block',
              margin: '0',
              marginRight: rhythm(1),
            }}
          >
            <Link
              to={page.url}
              className={css`
                color: ${colors.darkGrey};
                text-decoration: none;
                transition: color 0.2s ease-in-out;
                &:hover {
                  text-decoration: none;
                  color: ${colors.creme};
                }
              `}
              activeClassName={css`
                border-bottom: 2px solid;
                color: ${colors.creme};
              `}
            >
              {page.name}
            </Link>
          </li>
        )
      })}
    </ul>
  </nav>
)

export default Header
