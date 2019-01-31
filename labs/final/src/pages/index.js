import React from 'react'
import { graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Preview from '../components/preview'

import styles from './index.module.css'

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" keywords={[`blog`]} />
      <Bio />
      <main className={styles.index}>
        <ul>
          {
            data.posts.edges.map(({ node }) => (
              <li key={node.fields.slug}>
                <Preview slug={node.fields.slug} date={node.date} excerpt={node.fields.markdownBody.childMarkdownRemark.excerpt} title={node.title} />
              </li>
            ))
          }
        </ul>
      </main>
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
