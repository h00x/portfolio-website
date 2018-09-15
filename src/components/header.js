import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'
import { css } from 'react-emotion'

import logoImg from '../images/unnatural-logo.svg'

const Header = ({ pages, colors, sticky }) => (
  <nav
    className={css`
      margin: 0 auto;
      max-width: 960px;
      padding-top: ${rhythm(3)};
      padding-bottom: ${rhythm(1)};
      display: flex;
      align-items: center;
      @media (max-width: 1040px) {
        padding: ${rhythm(1)} ${rhythm(1)} 0 ${rhythm(1)};
      }
    `}
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
        className={css`
          margin: 0;
          margin-right: ${rhythm(2)};
          display: inline-block;
          width: 175px;
          height: 67px;
          max-width: none;
          @media (max-width: 768px) {
            margin-right: ${rhythm(1)};
          }
          @media (max-width: 370px) {
            width: 100%;
            height: 100%;
          }
        `}
      />
    </Link>
    <ul
      className={css`
        list-style: none;
        margin: 0;
        display: inline-block;
        @media (max-width: 768px) {
          text-align: right;
          margin-left: auto;
        }
      `}
    >
      {Object.keys(pages).map((item, index) => {
        let page = pages[item]
        return (
          <li
            key={index}
            className={css`
              margin: 0;
              display: inline-block;
              margin-right: ${rhythm(1)};
              @media (max-width: 768px) {
                display: block;
                margin-bottom: ${rhythm(0.5)};
                margin-right: 0;
                
              }
            `}
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
