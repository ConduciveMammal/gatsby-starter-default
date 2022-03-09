import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="react-icon"
    height={props.height}
    width={props.width}
    style={props.styles}
    {...props.hidden && {'aria-hidden': 'true'}}
  >
    {props.icon}
  </svg>
);

Icon.propTypes = {
  styles: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  icon: PropTypes.string,
  hidden: PropTypes.bool,
};

export default Icon;
