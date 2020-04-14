var express = require('express')
var app = express()

var Twitter = require('twitter')

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: '',
})
app.post('/public', function (req, res) {
  const params = { tweet_mode: 'extended'}
  client.get('statuses/home_timeline', params, function (
    error,
    tweets,
    response
  ) {
    if (!error) {
      console.log(tweets)
      res.send(JSON.stringify(tweets))
    } else {
      res.send(JSON.stringify(error))
    }
  })
})

app.post('/search', function (req, res) {
  console.log(req.body);
  client.get('search/tweets', { q: req.query.searchString }, function (
    error,
    tweets,
    response
  ) {
    if (!error) {
      // console.log(tweets)
      res.send(JSON.stringify(tweets))
    } else {
      res.send(JSON.stringify(error))
    }
  })
  // res.send('Hello World');
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
