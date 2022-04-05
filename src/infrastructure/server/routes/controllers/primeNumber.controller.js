const {getPrimeNumbers} = require('../../services/primeNumber.service')

const primeNumberRouteController = async ctx => {
  try {
    const {n} = ctx.request.query
    if (n) {
      ctx.status = 200
      ctx.body = {
        status: 'success',
        statusCode: 200,
        message: 'is a prime number',
        data: getPrimeNumbers(n),
      }
    } else {
      ctx.status = 200
      ctx.body = {
        status: 'fail',
        statusCode: 200,
        message: 'querystring not provided',
        data: [],
      }
    }
  } catch (error) {
    ctx.status = 500
    ctx.body = {
      status: 'error',
      statusCode: 500,
      message: 'server connection error',
      data: [],
    }
  }
}

module.exports = {primeNumberRouteController}
