const Seneca = require('seneca')
const { expect } = require('code')
const { describe, it } = exports.lab = require('lab').script()

describe('Calculator tests', () => {

  function senecaInstance () {
    return Seneca({log: 'test'})
    .test()
    .use('../src/calculator')
  }

  it('Expect seneca instance not to equal null', (fin) => {
    let seneca = senecaInstance(fin)

    expect(typeof seneca).to.equal('object')
  });
});
