require('./initializers/envLoader')

const express = require('express')
const bodyParser = require('body-parser')
const open = require('open')

const app = express()

if (process.env.NODE_ENV === 'development') require('./devMiddleware')(app) // eslint-disable-line

app.use(bodyParser.json())

app.use(express.static('public'))
app.use('/*', express.static('public/index.html'))

app.listen(process.env.PORT || 3000, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('App running at http://localhost:3000 \n Wait for webpack...') // eslint-disable-line
    open('http://localhost:3000')
  }
})
