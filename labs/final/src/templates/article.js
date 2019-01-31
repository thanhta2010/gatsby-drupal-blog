import React from 'react'
import { graphql } from 'gatsby'

import 'prismjs/themes/prism-okaidia.css'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function BlogPost({ data }) {
  const { article } = data
  return (
    <Layout>
      <SEO title={article.title} description={article.fields.markdownBody.childMarkdownRemark.excerpt} />
      <div dangerouslySetInnerHTML={{ __html: article.fields.markdownBody.childMarkdownRemark.html }} />
      <Bio />
    </Layout>
  ) 
}

export const blogPostQuery = graphql`
  query GetBlogPostBySlug($slug: String!) {
    article: nodeArticle(fields:{slug:{eq:$slug}}) {
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