const assert = require('assert')
const { parseByte, parseBuffer, parseFile } = require('../src/parser')
const { testData, inputFile, inputFileData } = require('./fixtures')

describe('byte to letter/quality record', () => {
  testData.forEach((testCase) => {
    const [input, letter, quality] = testCase
    it(`${input.toString(2).padStart(8, '0')} -> ${letter}/${quality}`, () => {
      assert.deepStrictEqual(
        parseByte(input), {
          letter,
          quality
        })
    })
  })
})

describe('byte array to letter/quality records', () => {
  it('converts array of bytes to array of records', () => {
    const inputBuffer = Buffer.from(testData.map(line => line[0]))
    const expectedOutput = testData.map(line => ({ letter: line[1], quality: line[2] }))
    assert.deepStrictEqual(
      parseBuffer(inputBuffer),
      expectedOutput
    )
  })
})

describe('binary file to letter/quality records', () => {
  it('converts binary file to array of records', () => {
    const expectedOutput = inputFileData.map(line => ({ letter: line[0], quality: line[1] }))
    assert.deepStrictEqual(parseFile(inputFile), expectedOutput)
  })
})