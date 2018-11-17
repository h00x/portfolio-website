import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'
import { css, keyframes } from 'react-emotion'
import Menu from './menu'

import logoImgSml from '../images/unnatural-logo-sml.svg'

class Header extends React.Component {
  render() {
    const fadeIn = keyframes`
      from {
        opacity: 0;
        transform: translateY(-80px)
      }
      to {
        opacity: 1;
        transform: translateY(0px)
      }
    `;
    
    const fadeOut = keyframes`
      from {
        opacity: 1;
        transform: translateY(0px)
      }
      to {
        opacity: 0;
        transform: translateY(-80px)
      }
    `;

    return (
      <nav
        style={{
          animation: `${this.props.sticky ? fadeIn : fadeOut} ${this.props.sticky ? '0.5s' : '0s'} forwards`,
          willChange: 'transform',
        }}
        className={css`
          position: fixed;
          z-index: 100;
          background-color: ${this.props.colors.creme};
          padding: 1em;
          width: 100%;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
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
              src={logoImgSml}
              alt="Unnatural logo"
              width={"135"}
              height={"30"}
              className={css`
                margin: 0;
                margin-right: ${rhythm(2)};
                display: inline-block;
                width: 135px;
                height: 30px;
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
