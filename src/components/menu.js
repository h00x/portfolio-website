import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'
import { css } from 'react-emotion'

class Menu extends React.Component {
  render() {
    return (
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
        {Object.keys(this.props.pages).map((item, index) => {
          let page = this.props.pages[item]
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
                  color: ${this.props.colors.darkGrey};
                  text-decoration: none;
                  transition: opacity 0.2s ease-in-out;
                  &:hover {
                    text-decoration: none;
                    opacity: 0.6;
                  }
                `}
                activeClassName={css`
                  border-bottom: 2px solid;
                  color: ${this.props.sticky ? this.props.colors.darkGrey : this.props.colors.creme};
                `}
              >
                {page.name}
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Menu