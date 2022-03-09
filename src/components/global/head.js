import * as React from "react"
import { Helmet } from "react-helmet"

const GlobalStyles = `
  :root {
    --primary: #00a0b0;
    --accent: #efd243;
  }
`;
function Head()  {
  return (
    <Helmet>
      <style>
        {GlobalStyles}
      </style>
    </Helmet>
  )
}

export default Head
