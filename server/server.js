import express from 'express'

let app = new express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/../dist'))
app.set('view engine', 'html')

app.set('trust proxy', function (ip) {
  if (ip === 'localhost:8080') return true;
  else return false;
})

app.get('/api/hello', function (req, res) {
  res.send('Hello World!');
})

app.listen(app.get('port'), function() {
  console.log('Convey is running on port', app.get('port'))
});
