import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/global/seo"
import HeroBanner from "../components/static-components/hero/hero"
import PortfolioBanner from "../components/static-components/portfolio-banner/portfolio-banner"


const IndexPage = ({data}) => (
  <Layout>

    <Seo title="Home" />
    <HeroBanner />
    <PortfolioBanner />
    <div className="wrapper">
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


    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
    </div>
  </Layout>
)

export default IndexPage
