import React from 'react';
export default function Footer() {
  // TODO: replace with footer JSX
 
  return (        <footer style={{ textAlign: 'center' }}>
  © {new Date().getFullYear()}, Built with
  {` `}
  <a href="https://www.gatsbyjs.org">Gatsby</a>
</footer>);
}