import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`blog`]} />
      <h1>Hello, and welcome to the gatsby-drupal-blog!</h1>
    </Layout>
  )
}

export default IndexPage
