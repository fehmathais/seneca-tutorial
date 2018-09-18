module.exports = function calculator () {
  var seneca = this

  seneca.add('role:calculator,cmd:div', require('./div'))
  seneca.add('role:calculator,cmd:mult', require('./mult'))
}
