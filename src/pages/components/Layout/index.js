import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import useSiteMetadata from './use-site-metadata'
import './layout.css'

const Layout = ({ children, page, className }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div className={`site-container ${className || ''}`}>
      <Helmet>
        <html lang="en" />
        <title>{!!page ? `${page} - ${title}` : title}</title>
        <meta name="description" content={description} />
        <meta charset="utf8" />
      </Helmet>
      <header>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </header>
      {children}
    </div>
  )
}

export default Layout
