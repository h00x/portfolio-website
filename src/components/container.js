import React from 'react'
import BgImage from '../images/stars-bg.jpg'
import './container.css'
import { rhythm } from "../utils/typography"

const Container = ({ children, colors }) => (
    <div style={{
        backgroundImage: `url(${BgImage})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100% auto`,
        backgroundColor: colors.lightGreen,
        minHeight: `100%`,
        borderTop: `1rem solid ${colors.creme}`,
        borderRight: `1rem solid ${colors.creme}`,
        borderLeft: `1rem solid ${colors.creme}`,
        position: `relative`,
        paddingBottom: rhythm(3)
    }}>
        {children}
    </div>
)

export default Container