const builder = require('jest-trx-results-processor')
const mkdirp = require('mkdirp')

mkdirp('.testresults')

const processor = builder({
  outputFile: '.testresults/test-results.trx' // this defaults to "test-results.trx"
})

module.exports = processor
