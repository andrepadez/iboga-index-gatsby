import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const FourOhFour = () => (
  <Layout page="404" className="four-oh-four">
    <h1>404 - Page not found!</h1>
    <p>back to <Link to="/">homepage</Link></p>
  </Layout>
)

export default FourOhFour
