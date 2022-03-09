import * as React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"


const Navigation = () => (
  <StaticQuery
  query={graphql`
  query Navigation {
    allSite {
      nodes {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  }
  `}
  render={data => (
    <nav className="navigation">
      <ul className="navigation__list">
        {data.allSite.nodes[0].siteMetadata.menuLinks.map((node, index) => (
          <li className="navigation__item" key={index}>
            <Link to={node.link} activeClassName="active">{node.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
    )}
  />

);

Navigation.propTypes = {
  data: PropTypes.object,
}

export default Navigation;
