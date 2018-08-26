import React from 'react'
import BgImage from '../images/stars-bg.jpg'
import './container.css'

const Container = ({ children, colors }) => (
    <div style={{
        backgroundImage: `url(${BgImage})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        backgroundColor: colors.lightGreen,
        height: `100%`
    }}>
        {children}
    </div>
)

export default Container