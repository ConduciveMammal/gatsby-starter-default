import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/global/seo"
import PortfolioItem from "../components/portfolio-item"
import HeroBanner from "../components/static-components/hero/hero"

export const query = graphql`
query PortfolioItems {
  allContentfulPortfolioItem(limit: 4) {
    edges {
      node {
        id
        url: projectUrl
        name: projectName
        date: projectDate
        featuredImage {
          file {
            url
          }
        }
        brief: projectBrief {
          raw
        }
      }
    }
  }
}
`

const IndexPage = ({data}) => (
  <Layout>

    <Seo title="Home" />
    <HeroBanner />
    <h1>Hi Liam</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    {data.allContentfulPortfolioItem.edges.map(({ node }, index) => (
      <div key={index}>
        <PortfolioItem item={node} />
      </div>
    ))}

    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
