const express = require('express')
const bodyParser = require('body-parser')

const server = express()
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(3210)

module.exports = server