import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'
import { css } from 'react-emotion'

const Button = ({ link, color, text, hoverColor }) => (
  <Link
    to={link}
    className={css`
      border: 2px solid ${color};
      padding: ${rhythm(0.5)} ${rhythm(1)};
      color: ${color};
      transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
      display: inline-block;
      &:hover {
          text-decoration: none;
          background-color: ${color};
          color: ${hoverColor};
      }
    `}
  >
    {text}
  </Link>
)

export default Button
