import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Your Great Blog" description="All my blog posts" />
      <ul>
        {data.allNodeArticle.edges.map(({ node }) => (
          <li key={node.title}>{node.title}</li>
        ))}
      </ul>
    </Layout>
  );
}
export const indexQuery = graphql`
  query GetAllBlogPosts {
    allNodeArticle {
      edges {
        node {
          title
        }
      }
    }
  }
`;