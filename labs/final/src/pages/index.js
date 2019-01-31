import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Preview from '../components/preview'

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" keywords={[`blog`]} />
      <ul>
        {
          data.posts.edges.map(({ node }) => (
            <li key={node.fields.slug}>
              <Preview slug={node.fields.slug} date={node.date} excerpt={node.fields.markdownBody.childMarkdownRemark.excerpt} title={node.title} />
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const indexQuery = graphql`
  {
    posts: allNodeArticle {
      edges {
        node {
          date:created(formatString:"MMM DD, YYYY")
          title
          fields {
            markdownBody {
              childMarkdownRemark {
                excerpt(pruneLength: 160)
              }
            }
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
