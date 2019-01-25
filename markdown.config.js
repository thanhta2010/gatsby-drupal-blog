const path = require('path')
const labTemplate = require(`./labs/readme-template`)

module.exports = {
  transforms: {
    LAB(content, options, { originalPath }) {
      const relativePath = path.relative(path.resolve('labs'), originalPath)
      const lab = path.dirname(relativePath)
      const [cwd] = originalPath.split(path.basename(originalPath))
      return labTemplate({
        cwd,
        lab
      })
    }
  }
}