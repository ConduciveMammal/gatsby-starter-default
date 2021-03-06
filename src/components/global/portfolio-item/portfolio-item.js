import * as React from "react"
import PropTypes from "prop-types"
import Button from "../buttons/button"

import './portfolio-item.scss'

const PortfolioItem = ({ item }) => (
  <div className="portfolio-item">
      <div className="portfolio-item__image-wrapper">
        <img
          src={item.featuredImage.gatsbyImageData.images.fallback.src}
          srcSet={item.featuredImage.gatsbyImageData.images.sources.srcSet}
          width={item.featuredImage.gatsbyImageData.width}
          height={item.featuredImage.gatsbyImageData.height}
          alt={item.featuredImage.description}
          sizes={item.featuredImage.gatsbyImageData.images.sources.sizes}
          className="portfolio-item__image"
          loading="lazy"/>
      </div>
      <div className="portfolio-item__overlay">
        <Button type="link" link={item.url} classes="button--accent portfolio-item__link">View Project</Button>
        <h3 className="portfolio-item__title">{item.name}</h3>
      </div>
    </div>
)

PortfolioItem.propTypes = {
  item: PropTypes.object,
}

export default PortfolioItem
