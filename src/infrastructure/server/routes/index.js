const {pingRouteController} = require('./controllers/ping')
const {primeNumberRouteController} = require('./controllers/primeNumber.controller')

function loadRoutes(router) {
  router.get('/ping', pingRouteController)
  router.get('/prime_number', primeNumberRouteController)

  return router
}

module.exports = {loadRoutes}
