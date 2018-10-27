import React from 'react'
import PropTypes from 'prop-types'
import { rhythm } from "../utils/typography"
import Header from './header'
import Footer from './footer'
import { css } from 'react-emotion'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      sticky: false 
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  handleScroll() {
    requestAnimationFrame(() => {
      if (window.pageYOffset > 100) {
        this.setState({
          sticky: true
        });
      } else {
        this.setState({
          sticky: false
        });
      }
    });
  }
  render() {
    return (
      <>
        <Header pages={this.props.pages} colors={this.props.colors} sticky={this.state.sticky} />
        <section
          style={{
            margin: '0 auto',
            maxWidth: 960,
            paddingBottom: rhythm(4),
            paddingTop: rhythm(2),
            overflow: 'auto',
            marginTop: `${this.state.sticky ? '182px' : ''}`
          }}
          className={css`
            @media (max-width: 1040px) {
              padding: 0 ${rhythm(1)};
            }
          `}
        >
          {this.props.children}
        </section>
        <Footer pages={this.props.pages} colors={this.props.colors} />
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
