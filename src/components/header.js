import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'
import { css } from 'react-emotion'

import logoImg from '../images/unnatural-logo.svg'
import logoImgSml from '../images/unnatural-logo-sml.svg'

class Header extends React.Component {
  render() {
    return (
      <nav
        style={{
          position: `${this.props.sticky ? 'fixed' : 'relative'}`,
          zIndex: `100`,
          backgroundColor: `${this.props.sticky ? this.props.colors.creme : ''}`,
          padding: `${this.props.sticky ? '1em' : ''}`,
        }}
        className={css`
          width: 100%;
          top: 0;
          padding-top: ${rhythm(3)};
          padding-bottom: ${rhythm(1)};
          display: flex;
          align-items: center;
          @media (max-width: 1040px) {
            padding: ${rhythm(1)} ${rhythm(1)} 0 ${rhythm(1)};
          }
        `}
      >
        <div 
          className={css`
            width: 960px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
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
              src={this.props.sticky ? logoImgSml : logoImg}
              alt="Unnatural logo"
              width={this.props.sticky ? "135" : "175"}
              height={this.props.sticky ? "30" : "67"}
              className={css`
                margin: 0;
                margin-right: ${rhythm(2)};
                display: inline-block;
                width: ${this.props.sticky ? '135px' : '175px'};
                height: ${this.props.sticky ? '30px' : '67px'};
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
        </div>
      </nav>
    )
  }
}

export default Header
