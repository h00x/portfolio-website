import React from 'react';
import { css } from "react-emotion";
import { rhythm } from "../utils/typography";
import { Link } from 'gatsby'

const Footer = ({ pages, colors }) => (
    <footer className={css`
      background-color: ${colors.creme};
      width: 100%;
      position: absolute;
      bottom:0;
      @media (max-width: 1040px) {
        padding: 0 ${rhythm(1)};
        position: relative;
      }
    `}>
      <div className={css`
        margin: 0 auto;
        max-width: 960px;
        padding-top: ${rhythm(1)};
        padding-bottom: ${rhythm(1)};
        @media (max-width: 768px) {
          text-align: center;
        }
      `}>
        <p className={css`
          margin: 0;
          font-size: ${rhythm(0.5)};
          display: inline-block;
        `}>
          &copy; Unnatural.nl
        </p>
        <ul
          className={css`
            list-style: none;
            margin: 0;
            display: inline-block;
            float: right;
            @media (max-width: 768px) {
              display: block;
              float: none;
            }
          `}
        >
          {Object.keys(pages).map((item, index) => {
            let page = pages[item]
            return (
              <li
                key={index}
                className={css`
                  display: inline-block;
                  margin: 0;
                  margin-left: ${rhythm(1)};
                  @media (max-width: 768px) {
                    display: block;
                    margin-left: 0;
                  }
                `}
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