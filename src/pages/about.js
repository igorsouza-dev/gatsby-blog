import React from "react"
import { Link } from "gatsby"

const AboutPage = () => (
  <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about" activeStyle={{ color: "red" }}>
          About
        </Link>
      </li>
    </ul>
  </>
)

export default AboutPage
