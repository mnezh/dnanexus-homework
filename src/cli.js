const program = require('commander')
const { parseFile } = require('./parser')
const { saveFASTQ } = require('./formatter')
module.exports = (logger) => {
  program
    .version('1.0.0')
    .option('-i, --input <input-file>', 'Binary input file')
    .option('-o, --output <output-file>', 'FASTQ output file')
    .option('-l, --line-length <line-length>', 'FASTQ output sequence length')
    .parse(process.argv)
  const { input, output } = program
  const lineLength = parseInt(program.lineLength)
  if (input && output && lineLength) {
    saveFASTQ(output, parseFile(input), lineLength)
  } else {
    logger.error('Missing arguments')
    process.exit(1)
  }
}