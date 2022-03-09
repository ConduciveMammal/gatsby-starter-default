import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"

const PortfolioItem = ({ item }) => (
  <div
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {/* {console.log(item)} */}
      <img src={item.featuredImage.file.url} alt={item.featuredImage.description} />
      <h1>{item.name}</h1>
      <time>{item.date}</time>

      <p>{item.brief.raw.data}</p>
      <a href={ item.url }>Visit site</a>
    </div>
  </div>
)

PortfolioItem.propTypes = {
  item: PropTypes.object,
}

export default PortfolioItem
