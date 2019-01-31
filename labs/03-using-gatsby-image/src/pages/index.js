import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" keywords={[`blog`]} />
      <ul>
        {
          data.articles.edges.map(({ node }) => (
            <ul key={node.fields.slug}>
              <Link to={node.fields.slug}>{node.title}</Link>
            </ul>
          ))
        }
      </ul>
    </Layout>
  )
}

export const indexQuery = graphql`
  {
    articles: allNodeArticle {
      edges {
        node {
          title
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
