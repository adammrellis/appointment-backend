const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8000
const cors = require('cors')
const logger = require('morgan')
const { Model } = require('objection')
const knexInstance = require('./db/knex')

const users = require('./routes/users')
const appointments = require('./routes/appointments')

Model.knex(knexInstance)

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/users', users)
app.use('/appointments', appointments)

app.listen(port, function() {
  console.log('listening on port: ', port)
})