const express = require('express')
const path = require('path')
require('dotenv').config();

const app = express()
const port = Number(process.env.PORT)
const host = process.env.HOST
const APP_NAME = process.env.APP_NAME

express.static('./')

app.get('/', (req, res) => {
  res.send(`Hello This is ${APP_NAME}!`)
})

app.use('/public', express.static(path.join( __dirname , 'public')))

app.listen(port, () => {
  console.log(`${APP_NAME} listening at https://${host}:${port}`)
})

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})
