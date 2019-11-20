const chat = require('./chat');

module.exports = (server) => {
  server.get('/', function (req, res) {
    console.log('sdasdasd')
    res.send('Hello World')
  })


  server.post('/webhook', function(req, res) {
    chat.handle(req.body)
    res.sendStatus(200)
    console.log(req.body)
  })

  server.get('/channels', function (req, res) {
    res.json(chat.getChannels())
  })
}