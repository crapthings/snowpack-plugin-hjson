const fs = require('fs')
const { parse } = require('hjson')

const plugin = () => ({
  name: 'snowpack-plugin-hjson',
  resolve: {
    input: ['.hjson'],
    output: ['.json'],
  },
  async load({ filePath }) {
    const file = await fs.promises.readFile(filePath, 'utf-8')
    return JSON.stringify(parse(file))
  }
})

module.exports = {
  plugin
}
