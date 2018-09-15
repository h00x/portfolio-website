import React from 'react'
import BgImage from '../images/stars-bg.jpg'
import './container.css'
import { rhythm } from '../utils/typography'
import { css } from "react-emotion";

const Container = ({ children, colors }) => (
  <div
    className={css`
      background-image: url(${BgImage});
      background-repeat: no-repeat;
      background-size: 100% auto;
      background-color: ${colors.lightGreen};
      min-height: 100%;
      border-top: 1rem solid ${colors.creme};
      border-right: 1rem solid ${colors.creme};
      border-left: 1rem solid ${colors.creme};
      position: relative;
      padding-bottom: ${rhythm(3)}
      @media (max-width: 1040px) {
        padding-bottom: 0;
      }
    `}
  >
    {children}
  </div>
)

export default Container
