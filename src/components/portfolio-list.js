import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { rhythm } from '../utils/typography';
import { css } from 'react-emotion'

export const PortfolioList = ({ obj, three, colors }) => {
  let imgList = obj.map((item, index) => {
    let link = `/${item.node.slug}/`;
    return (
      <Link to={link} key={index} style={{overflow: 'hidden'}} className={css`&:hover .titlePort {opacity: 1 !important; transition: opacity 0.3s ease-in-out;}`}>
        <div style={{position: 'absolute', zIndex: '2', padding: rhythm(1), backgroundColor: 'rgb(149, 238, 221, 0.5)', color: colors.darkGrey, opacity: '0' }} className="titlePort" >{item.node.title}</div>
        <Img
          key={index}
          sizes={item.node.acf.featured_image.localFile.childImageSharp.sizes}
          alt={item.node.title}
        />
        
      </Link>
    )
  })

  if (three){
    return [imgList[0], imgList[1], imgList[2]]
  } else {
    return imgList
  }
  
}

export default PortfolioList