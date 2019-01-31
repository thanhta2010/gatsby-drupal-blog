import React from 'react'
// TODO: import query from gatsby

import Layout from '../components/layout'
import SEO from '../components/seo'

// TODO: use injected data prop from query
function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`blog`]} />
      <h1>Hello, and welcome to the gatsby-drupal-blog!</h1>
      {/* TODO: render list of articles */}
    </Layout>
  )
}

// TODO: write query

export default IndexPage
