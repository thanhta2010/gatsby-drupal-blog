const path = require('path')

/*
 * This adds a slug resolution field to all articles and pages
 * this is useful for linking and querying
 */
exports.onCreateNode = function onCreateNode({ actions, node }) {
  const { createNodeField } = actions

  if (node.internal.type === 'node__article' || node.internal.type === 'node__page') {
    createNodeField({
      node,
      name: 'slug',
      value: node.path.alias
    })
  }
}

exports.createPages = async function createPages({ actions, graphql }) {
  const { createPage } = actions

  const result = await graphql(`
    {
      articles: allNodeArticle {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
    .then(res => {
      if (res.errors) {
        throw res.errors
      }
      return res.data
    })

  const articleTemplate = path.resolve('src/templates/article.js')

  result.articles.edges.forEach(({ node }) => {
    createPage({
      component: articleTemplate,
      path: node.fields.slug,
      context: {
        slug: node.fields.slug
      }
    })
  })
}