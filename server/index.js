"use strict";
const app = require('koa')()
const router = require('koa-router')()
const serve = require('koa-static')
const jwt = require('koa-jwt')

router.get('/api/hello', function *() {
  this.body = 'Hello World!'
})

app.use(router.routes())
app.use(router.allowedMethods())
app.use(serve(__dirname + '/../public'))

app.listen(process.env.PORT || 5000)

console.log('Top Request is running on port', process.env.PORT || 5000) // eslint-disable-line no-console
