const seneca = require('seneca')()

seneca.use('./calculator')

async function div(a, b) {
  return new Promise((resolve, reject) => {
    const pattern = {
      role: 'calculator',
      cmd: 'div'
    }

    const payload = {
      a: a,
      b: b
    }

    seneca.act(Object.assign({}, pattern, payload), (err, msg) => {
      if (err) reject(err)

      const response = msg.response

      if (! response.status) {
        reject(response.message)
      }

      resolve(response.result)
    })
  })
}

async function mult(a, b) {
  return new Promise((resolve, reject) => {
    const pattern = {
      role: 'calculator',
      cmd: 'mult'
    }

    const payload = {
      a: a,
      b: b
    };

    seneca.act(Object.assign({}, pattern, payload), (err, msg) => {
      if (err) reject(err)

      const response = msg.response

      if (! response.status) {
        reject(response.message)
      }

      resolve(response.result)
    })
  })
}

div(100, 2)
  .then((result) => mult(result, 10))
  .then((result) => div(result, 5))
  .then((result) => mult(result, 100))
  .then(result => console.log({
    response: {
      status: true,
      result: `Operation result is: ${result}`
    }
  }))
  .catch(err => console.log({
    response: {
      status: false,
      message: err
    }
  }))
