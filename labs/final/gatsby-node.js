const path = require('path')

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
      blog: allNodeArticle {
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

  const blogPostTemplate = path.resolve('src/templates/blog-post.js')

  result.blog.edges.forEach(({ node }) => {
    createPage({
      component: blogPostTemplate,
      path: node.fields.slug,
      context: {
        slug: node.fields.slug
      }
    })
  })
}