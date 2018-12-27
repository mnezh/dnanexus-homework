const assert = require('assert')
const { formatData } = require('../src/formatter')
const { parseFile } = require('../src/parser')
const { outputSamples, readOutputSample, sampleInputFile } = require('./fixtures')

describe('format data as FASTQ', () => {  
  let parsedInput = {}
  beforeAll(() => {
    parsedInput = parseFile(sampleInputFile)
  })
  outputSamples.forEach((testcase) => {
    const [ fileName, lineLength ] = testcase
    it (`Formatting output with L=${lineLength} matches ${fileName}`, () => {
      assert.deepStrictEqual(readOutputSample(fileName), formatData(parsedInput, lineLength))
    })
  })
})