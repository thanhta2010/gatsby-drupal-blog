import React from 'react'
import { graphql } from 'gatsby'

import 'prismjs/themes/prism-okaidia.css'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function BlogPost({ data }) {
  const { post } = data
  return (
    <Layout>
      <SEO title={post.title} description={post.fields.markdownBody.childMarkdownRemark.excerpt} />
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
            excerpt(pruneLength: 160)
            html
          }
        }
      }
    }
  }
`