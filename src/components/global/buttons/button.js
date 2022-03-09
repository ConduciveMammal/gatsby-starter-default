import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './button.scss'

const Button = (props) => {
  if (props.type === "link") {
    return <Link to={props.link} className={`button ${props.classes}`}>{props.children}</Link>
  } else {
    return <button type={props.type} className={`button ${props.classes}`}>{props.children}</button>
  }
}

Button.propTypes = {
  type: PropTypes.string,
  link: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.node,
}

export default Button
