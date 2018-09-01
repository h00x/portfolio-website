import React from 'react'
import Button from './button'
import { rhythm } from '../utils/typography'

const BottomCTA = ({ link, color, buttonText, titleText, hoverColor }) => (
  <div style={{width: '100%', textAlign: 'center', marginTop: rhythm(3)}}>
      <h2 style={{ fontWeight: 'normal', marginBottom: rhythm(1) }}>{titleText}</h2>
      <Button
          link={link}
          text={buttonText}
          color={color}
          hoverColor={hoverColor}
      />
  </div>
)

export default BottomCTA