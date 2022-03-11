import * as React from "react"

import Navigation from "./navigation"

const hideHeaderOnScroll = () => {
  const header = document.querySelector(".site-header")
  const headerHeight = header.offsetHeight
  const headerOffset = headerHeight + 20

  document.addEventListener('scroll', () => {
    if (window.scrollY > headerOffset) {
      header.classList.add("site-header--hidden")
    } else {
      header.classList.remove("site-header--hidden")
    }
  })
};

class Header extends React.Component {
  componentDidMount() {
    hideHeaderOnScroll();
  };

  render() {
    return (
      <header className="site-header">
      <div className="wrapper">
        <Navigation />
      </div>
    </header>
    )
  }
}

export default Header;