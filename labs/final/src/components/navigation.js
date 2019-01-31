import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import styles from './navigation.module.css'

export default function Navigation() {
  return (
    <StaticQuery
      query={graphql`
        {
          pages: allNodePage {
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
      `}
      render={data => (
          <ul className={[styles.list, styles.nav].join(' ')}>
            {
              data.pages.edges.map(({ node }) => (
                <li className={styles.listItem} key={node.fields.slug}>
                  <Link className={styles.link} to={node.fields.slug}>{node.title}</Link>
                </li>
              ))
            }
          </ul>
      )}
    />
  )
}