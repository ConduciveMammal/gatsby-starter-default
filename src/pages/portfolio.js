import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
const ComponentName = ({ data }) => <Layout><pre>{JSON.stringify(data.allContentfulPortfolioItem.edges, null, 4)}</pre></Layout>

export const query = graphql`
  {
    allContentfulPortfolioItem {
      totalCount
      edges {
        node {
          projectUrl
          projectName
          projectMedia {
            id
          }
          projectDate
          projectBrief {
            raw
          }
        }
      }
    }
  }
`

export default ComponentName
