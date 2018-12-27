const fs = require('fs')
require('./types')

/**
 * Coverts a binary letter/quality representation to strings
 * 2 high bits represent letter ( 00 = A, 01 = C, 10 = G, 11 = T)
 * 6 lower bits represent quality (0-63), represented by ASCII 33-96 in the output
 * Example:
 * 127 (0b01111111) => {letter: 'C', quality: '`'}
 * @param {number} byte
 * @returns {module:types.LetterQuality}
 */
const parseByte = (byte) => {
  const letters = ['A', 'C', 'G', 'T']
  // the line below is frankly optional and can negatively affect performance
  // but if this function will be used in other context, it would be nice to handle invalid input somehow,
  // either by normalizing the input or by throwing exception
  const normalized = Math.abs(~~(byte % 256))
  return {
    letter: letters[~~(normalized/64)],
    quality: String.fromCharCode((normalized % 64) + 33)
  }
}

/**
 * We would definitely need something more fancy in case of larger input, some
 * iterator/pipeline stuff, but then again, why would we handle large data in JS?
 * @param {Buffer} buffer
 * @returns {Array<module:types.LetterQuality>}
 */
const parseBuffer = (buffer) => {
  const result = []
  for (const byte of buffer.values()) {
    result.push(parseByte(byte))
  }
  return result
}

const parseFile = (filePath) =>
  parseBuffer(fs.readFileSync(filePath))

module.exports = {
  parseByte,
  parseBuffer,
  parseFile
}