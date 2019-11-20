module.exports = (server) => {

  server.get('/', function (req, res) {
    console.log('sdasdasd')
    res.send('Hello World')
  })


  server.post('/*', function(req, res) {
    console.log(req.body)
    res.sendStatus(200)
  })
}