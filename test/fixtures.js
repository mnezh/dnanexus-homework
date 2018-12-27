const fs = require('fs')
const fsPath = require('path')

const testData = [
  /** let's use examples from the provided spec */
  [0b00000000, 'A', '!'],
  [0b11100000, 'T', 'A'],
  [0b11000001, 'T', '"'],
  [0b01111111, 'C', '`'],
  /* and have some invalid input as well */
  [0b1111111111, 'T', '`']
]

const inputFile = fsPath.resolve(__dirname, './four.bytes.file')

const inputFileData = [
  ['C', '"'],
  ['C', '#'],
  ['C', '$'],
  ['T', '/']
]

const samplePath = (sampleName) =>
  fsPath.resolve(__dirname, './dna_conversion_samples', sampleName)

const sampleInputFile = samplePath('input')

const outputSamples = [
  [ 'output7', 7 ],
  [ 'output15', 15 ],
  [ 'output80', 80 ]
]

const readOutputSample = (sampleFile) =>
  fs.readFileSync(samplePath(sampleFile), 'utf8').trim().split('\n')

module.exports = {
  testData,
  inputFile,
  inputFileData,
  outputSamples,
  sampleInputFile,
  readOutputSample
}