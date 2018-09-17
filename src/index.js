var seneca = require('seneca')()

seneca.add('role:entity,cmd:create-checklist', (msg, done) => {
  done(null, {response: {status: true, result: msg.name }})
})

const pattern = {
  role: 'entity', cmd: 'create-checklist'
}

const payload = {
  name: 'Limpar cozinha',
  date: '2018-09-17',
}

seneca.act(Object.assign({}, pattern, payload), (err, response) => {
  if (err) return reject(err)
  return resolve(response)
})
