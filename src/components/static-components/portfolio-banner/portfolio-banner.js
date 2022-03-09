import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import PortfolioItem from "../../global/portfolio-item/portfolio-item"

import './portfolio-banner.scss'

export const query = graphql`
query PortfolioItems {
  allContentfulPortfolioItem(limit: 3, sort: {fields: createdAt, order: DESC}) {
    edges {
      node {
        id
        url: projectUrl
        name: projectName
        date: projectDate
        featuredImage {
          gatsbyImageData
        }
        brief: projectBrief {
          raw
        }
      }
    }
  }
}
`

const PortfolioBanner = () => (
  <StaticQuery
  query={query}
  render={data => (
    <div className="wrapper">
      <div className="portfolio-banner">
        <div className="portfolio-banner__container">
          {data.allContentfulPortfolioItem.edges.map(({ node }, index) => (
            <div key={index}>
              <PortfolioItem item={node} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )}
  />
)

export default PortfolioBanner;
