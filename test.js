const globby = require('globby')

const files = globby.sync('./lib')

console.log(files)

if (files.length >= 2) {
  throw new Error('built 2 files or more');
  process.exit(1);
}

process.exit(0);