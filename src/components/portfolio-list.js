import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export const PortfolioList = ({ obj, three }) => {
  let imgList = obj.map((item, index) => {
    let link = `/${item.node.slug}/`
    return (
      <Link to={link} key={index}>
        <Img
          key={index}
          sizes={item.node.acf.featured_image.localFile.childImageSharp.sizes}
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