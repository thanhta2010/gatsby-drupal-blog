import React from 'react'
import { graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
// TODO: import SEO component

export default function BlogPost({ data }) {
  const { article } = data
  return (
    <Layout>
      {/* TODO: Use SEO component here */}
      <div dangerouslySetInnerHTML={{ __html: article.fields.markdownBody.childMarkdownRemark.html }} />
      <Bio />
    </Layout>
  ) 
}

// TODO: augment query with image and excerpt
export const blogPostQuery = graphql`
  query GetBlogPostBySlug($slug: String!) {
    article: nodeArticle(fields:{slug:{eq:$slug}}) {
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