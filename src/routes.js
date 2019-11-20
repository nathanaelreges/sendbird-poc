const chatController = require('./chatController');
const chatAPI = require('./chatAPI');
const path = require('path');

module.exports = (server) => {
  server.get('/', function (req, res) {
    console.log('sdasdasd')
    res.send('Hello World')
  })

  server.get('/poc-chat/admin', function (req, res) {
    res.sendFile('index.html', {
      root: path.join(__dirname, '../'),
    })
  })

  server.post('/poc-chat/webhook', function(req, res) {
    chatController.handle(req.body)
    res.sendStatus(200)
    console.log(req.body)
  })

  server.post('/poc-chat/send_message', function(req, res) {
    chatAPI.sendMessage(req.body)
    res.sendStatus(200)
    console.log(req.body)
  })

  server.get('/poc-chat/channels', function (req, res) {
    res.json(chatController.getChannels())
  })
}
