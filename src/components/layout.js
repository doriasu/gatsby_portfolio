import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header;
  const data = useStaticQuery(
    graphql`
        {
        twitter: file(relativePath: { eq: "twitter.png" }) {
            childImageSharp {
            fixed(width: 50) {
                ...GatsbyImageSharpFixed
            }
            }
        },
        github: file(relativePath: { eq: "github.png" }) {
          childImageSharp {
          fixed(width: 50) {
              ...GatsbyImageSharpFixed
          }
          }
      }
        }
    `
    );
  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
        <a className="img" href = "https://twitter.com/u_yeiyei"><Img fixed={data.twitter.childImageSharp.fixed} alt="test fixed" /></a>
        <a className="img" href = "https://github.com/doriasu"><Img fixed={data.github.childImageSharp.fixed} alt="test fixed" /></a>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
