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
