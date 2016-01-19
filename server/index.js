"use strict";
const express = require('express')
const pg = require('pg')

let app = new express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/../public'))
app.set('view engine', 'html')

app.get('/api/hello', function (req, res) {
  res.send('Hello World!');
})

app.get('/db', function (req, res) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err) {
        res.send("Error " + err)
      } else {
        res.send(result.rows)
      }
    })
  })
})

app.listen(app.get('port'), function() {
  console.log('Top Request is running on port', app.get('port'))
});
