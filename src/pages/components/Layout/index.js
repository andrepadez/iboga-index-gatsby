import React from 'react'
import Helmet from 'react-helmet'
import useSiteMetadata from './use-site-metadata'
import './layout.css'

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div className="site-container">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charset="utf8" />

      </Helmet>
      {children}
    </div>
  )
}

export default Layout
