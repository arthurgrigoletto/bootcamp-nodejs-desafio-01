const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

const routes = require('../routes')

module.exports = () => {
  const app = express()

  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())

  // Nunjucks Config
  nunjucks.configure(path.resolve(__dirname, '..', 'views'), {
    autoescape: true,
    express: app,
    watch: true
  })

  app.set('view engine', 'njk')

  app.use('/', routes)

  return app
}
