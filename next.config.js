module.exports = {
  env: {
    rawJsFromFile: fs.readFileSync('/static/script.js').toString()
  }
}
