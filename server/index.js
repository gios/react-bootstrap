"use strict";
const express = require('express')

let app = new express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/../convey'))
app.set('view engine', 'html')

app.get('/api/hello', function (req, res) {
  res.send('Hello World!');
})

app.listen(app.get('port'), function() {
  console.log('Convey is running on port', app.get('port'))
});
