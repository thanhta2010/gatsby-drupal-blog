import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import styles from './bio.module.css'

export default function Bio() {
  return (
    <StaticQuery
      query={graphql`
        {
          bio: nodePage(title:{eq:"Bio"}) {
            relationships {
              field_image {
                relationships {
                  field_media_image {
                    localFile {
                      childImageSharp {
                          fixed(height:48) {
                            ...GatsbyImageSharpFixed
                          }
                        }
                    }
                  }
                }
              }
            }
            fields {
              markdownBody {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      `}
      render={data => (
        (
          <div className={styles.bio}>
            <Image className={styles.avatar} fixed={data.bio.relationships.field_image.relationships.field_media_image.localFile.childImageSharp.fixed} />
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: data.bio.fields.markdownBody.childMarkdownRemark.html }} />
          </div>
        )
      )}
    />
  )
}
