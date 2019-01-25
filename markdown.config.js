const path = require('path')
const fs = require('fs')
const labTemplate = require(`./labs/readme-template`)

module.exports = {
  transforms: {
    ALL_LABS() {
      const base = path.resolve('labs')
      const labs = fs.readdirSync(base)
        .filter(fileOrDirectory => fs.statSync(path.join(base, fileOrDirectory)).isDirectory())
      return labs.map(lab => `- [${lab}](./${path.join('labs', lab)})`).join('\n')
    },
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