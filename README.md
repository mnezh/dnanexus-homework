# DNAnexus homework
# Installation
* fetch node.js 10.15.0
* checkout repository
* in repository directory run `npm i`
# Running the script
```
bin/convertdna --help
Usage: convertdna [options]

Options:
  -V, --version                    output the version number
  -i, --input <input-file>         Binary input file
  -o, --output <output-file>       FASTQ output file
  -l, --line-length <line-length>  FASTQ output sequence length
  -h, --help                       output usage information
```
Example:
```
./bin/convertdna -i test/dna_conversion_samples/input -l 7 -o testoutput
```

# Contributing
Commit hook is implemented to run the tests and lint, so your checks should pass prior to commit
