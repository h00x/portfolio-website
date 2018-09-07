import React from 'react';
import { css } from "react-emotion";
import { rhythm } from "../utils/typography";
import { Link } from 'gatsby'

const Footer = ({ pages, colors }) => (
    <footer className={css`
      background-color: ${colors.creme};
      width: 100%;
      height: ${rhythm(3)};
      position:absolute;
      bottom:0;
    `}>
      <div className={css`
        margin: 0 auto;
        max-width: 960px;
        padding-top: ${rhythm(1)};
        padding-bottom: ${rhythm(1)};
      `}>
        <p className={css`
          margin: 0;
          font-size: ${rhythm(0.5)};
          display: inline-block;
        `}>
          &copy; Unnatural.nl
        </p>
        <ul
          style={{
            listStyle: 'none',
            margin: '0',
            display: 'inline-block',
            float: 'right'
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
                  marginLeft: rhythm(1),
                }}
              >
                <Link
                  to={page.url}
                  className={css`
                    color: ${colors.darkGrey};
                    text-decoration: none;
                    transition: color 0.2s ease-in-out;
                    font-size: ${rhythm(0.5)};
                  `}
                  activeClassName={css`
                    text-decoration: underline;
                  `}
                >
                  {page.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
)

export default Footer