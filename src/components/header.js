import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle, pages }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul style={{
          listStyle: 'none',
          margin: '1rem 0 0 0'
        }}>

        {Object.keys(pages).map((item) => {
          const menuItem = pages[item]
          return (<li key={menuItem.name} style={{ 
                display: 'inline-block',
                marginRight: '1rem'
              }}>
              <Link
                to={menuItem.url}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                {menuItem.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  </div>
)

export default Header
