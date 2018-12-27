const fs = require('fs')
require('./types')

const saveFASTQ = (fileName, letters, lineLength) =>
  fs.writeFileSync(
    fileName,
    formatData(letters, lineLength).join('\n'), 'utf8'
  )

/**
 * @param {Array<module:types.LetterQuality>} letters
 * @param {number} lineLength
 * @returns {Array<string>}
 */
const formatData = (letters, lineLength) => {
  let output = []
  for (let i = 0, readNumber = 1; i<letters.length; i+=lineLength, readNumber++) {
    output = output.concat(
      formatLine(
        letters.slice(i, i + lineLength),
        readNumber))
  }
  return output
}

/**
 * @param {Array<module:types.LetterQuality>} letters
 * @param {number} readNumber
 * @returns {Array<string>}
 */
const formatLine = (letters, readNumber) =>
  [
    `@READ_${readNumber}`,
    letters.map((l) => l.letter).join(''),
    `+READ_${readNumber}`,
    letters.map((l) => l.quality).join('')
  ]

module.exports = {
  formatData,
  saveFASTQ
}