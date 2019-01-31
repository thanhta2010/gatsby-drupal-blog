import React from 'react'
import { Link } from 'gatsby'

import styles from './preview.module.css'

export default function Preview({ date, title, excerpt, slug }) {
  return (
    <div className={styles.preview}>
      <h2>
        <Link to={slug}>
          {title}
        </Link>
      </h2>
      <h3>{date}</h3>
      <p>{excerpt}</p>
    </div>
  )
}
