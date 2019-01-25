const { exec } = require('child_process')

const checks = [
  ['node', 8],
  ['npm', 5],
  ['yarn', 1]
]

let validChecks = 0

checks
  .forEach(([dep, expected]) => {
    exec(`${dep} --version`, (err, stdout, stderr) => {
      if (err || stderr) {
        throw new Error(`Looks like something went wrong with ${script}\n${err || stderr}`)
      }

      const [major] = stdout.trim().replace(/^v/, '').split('.').map(part => parseInt(part, 10))
      if (major < expected) {
        console.error(`🙅‍♂️ The version of ${dep} (${major}) is lower than the minimum expected version (${expected})`)
        process.exit(1)
      } else {
        validChecks += 1;
        if (validChecks + 1 === checks.length) {
          console.log('🎉 🎉 🎉 Woo hoo! Looks like your environment is ready to go for this workshop 🎉 🎉 🎉 ')
          process.exit(0)
        }
      }
    })
  })
