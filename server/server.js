import express from 'express'

let app = new express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/../dist'))
app.set('view engine', 'html')

app.listen(app.get('port'), function() {
  console.log('Convey is running on port', app.get('port'))
});
