const routes = require('express').Router()
const checkQueryMiddleware = require('./middlewares/checkQueryParamsMiddleware')
const MainController = require('./controllers/MainController')

routes.get('/', MainController.index)
routes.get(
  '/major',
  checkQueryMiddleware.checkAgeQueryParams,
  MainController.major
)
routes.get(
  '/minor',
  checkQueryMiddleware.checkAgeQueryParams,
  MainController.minor
)
routes.post('/check', MainController.check)

module.exports = routes
