import React from 'react'

import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}
