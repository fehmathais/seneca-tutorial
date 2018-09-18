'use strict';

module.exports = function mult(msg, done) {
  if (
    (typeof msg.a === 'undefined' || typeof msg.a !== 'number') ||
    (typeof msg.b === 'undefined' || typeof msg.b !== 'number')
  ) {
    return done(null, {
      response: {
        status: false,
        message: 'A and B parameters are required numbers.'
      }
    });
  }

  return done(null, {
    response: {
      status: true,
      result: (msg.a * msg.b)
    }
  })
}
