const express = require('express')
const {errorHandler} = require('./middleware/errorMiddleware')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/tasks', require('./routes/taskRoutes'))

app.use(errorHandler)

module.exports = app;
