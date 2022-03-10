import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import PortfolioItem from "../../global/portfolio-item/portfolio-item"
import parse from "html-react-parser"

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

const content = {
  title: "Recent Projects",
  subtitle: "Just a <strong>preview</strong>",
}

const PortfolioBanner = () => (
  <StaticQuery
  query={query}
  render={data => (
    <div className="wrapper">
      <div className="portfolio-banner">
        <header className="portfolio-banner__heading">
          <h2 className="portfolio-banner__title">{content.title}</h2>
          <p className="portfolio-banner__subtitle">{parse(content.subtitle)}</p>
        </header>
        <div className="portfolio-banner__container">
          {data.allContentfulPortfolioItem.edges.map(({ node }, index) => (
            <PortfolioItem key={index} item={node} />
          ))}
        </div>
      </div>
    </div>
  )}
  />
)

export default PortfolioBanner;
