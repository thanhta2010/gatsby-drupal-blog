import React from 'react'
import { graphql } from 'gatsby'

import 'prismjs/themes/prism-okaidia.css'

import Layout from '../components/layout'

export default function BlogPost({ data }) {
  const { post } = data
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: post.fields.markdownBody.childMarkdownRemark.html }} />
    </Layout>
  )
}

export const blogPostQuery = graphql`
  query GetBlogPostBySlug($slug: String!) {
    post: nodeArticle(fields:{slug:{eq:$slug}}) {
      title
      fields {
        markdownBody {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`