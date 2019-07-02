import React from 'react'
import { Link } from 'gatsby'
import Layout from './components/Layout'

export default () => (
  <Layout>
    <h1>404 - Page not found!</h1>
    <p>back to <Link to="/">homepage</Link></p>
  </Layout>
)
