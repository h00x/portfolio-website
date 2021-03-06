import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'
import { css } from 'react-emotion'
import Menu from './menu'

import logoImg from '../images/unnatural-logo.svg'

class Header extends React.Component {
  render() {
    return (
      <nav
        className={css`
          position: relative;
          z-index: 100;
          width: 100%;
          top: 0;
          transform: translate3d(0, 0, 0);
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
              src={logoImg}
              alt="Unnatural logo"
              width={"175"}
              height={"67"}
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
          <Menu pages={this.props.pages} colors={this.props.colors} sticky={this.props.sticky} />
        </div>
      </nav>
    )
  }
}

export default Header
