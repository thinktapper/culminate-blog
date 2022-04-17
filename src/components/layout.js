import * as React from "react"
import { Link } from "gatsby"
// import Sidebar from "sidebar/index"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  // const menuLinks = data.allMarkdownRemark.edges[0].node.frontmatter.menuItems
  // const menuVisibility = data.allMarkdownRemark.edges[0].node.frontmatter.visible
  let header

  if (isRootPath) {
    header = (
      <nav className="main-heading">
        <h1>
        <Link to="/">{title}</Link>
        </h1>
        <h5>
        <Link className="header-link-mainSite" to="https://culminatepresents.com/">Back to main</Link>
      </h5>
      </nav>
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
      <header className="global-header">{header}
      
      </header>
      {/* Sidebar
      <Sidebar siteMenu={menuLinks} visible={menuVisibility} transparent={`transparent`} /> */}
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://tapper.codes">Tapper</a>
      </footer>
    </div>
  )
}

export default Layout
