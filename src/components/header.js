import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from "../utils/typography"
import logoImg from '../images/unnatural-logo.svg'

const Header = ({ pages, colors }) => (
  <div>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        paddingTop: rhythm(3),
        paddingBottom: rhythm(3),
      }}
    >
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <img src={logoImg} alt="Unnatural logo" width="175" height="67" style={{ margin: 0, marginRight: rhythm(1), display: 'inline-block' }} />
      </Link>
      <ul style={{
          listStyle: 'none',
          margin: '0',
          marginTop: rhythm(1),
          display: 'inline-block',
        }}>
        {pages.map((item, index) => {
          return (<li key={index} style={{ 
                display: 'inline-block',
                margin: '0',
                marginRight: '1rem'
              }}>
              <Link
                to={item.url}
                style={{
                  color: colors.darkGrey,
                  textDecoration: 'none',
                }}
              >
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  </div>
)

export default Header
