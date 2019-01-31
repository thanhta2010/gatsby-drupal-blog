import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

import 'prismjs/themes/prism-okaidia.css'
import styles from './page.module.css'

export default function Page({ data }) {
  const { page } = data
  return (
    <Layout>
      <SEO title={page.title} description={page.fields.markdownBody.childMarkdownRemark.excerpt} />
      <Image className={styles.image} fluid={page.relationships.field_image.relationships.field_media_image.localFile.childImageSharp.fluid} />
      <div dangerouslySetInnerHTML={{ __html: page.fields.markdownBody.childMarkdownRemark.html }} />
      <Bio />
    </Layout>
  ) 
}

export const blogPostQuery = graphql`
  query GetPageBySlug($slug: String!) {
    page: nodePage(fields:{slug:{eq:$slug}}) {
      relationships {
        field_image {
          relationships {
            field_media_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 960) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
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