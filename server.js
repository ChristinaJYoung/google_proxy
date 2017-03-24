// 'use strict'
//
// const express = require('express')
// const app = express()
// const port = process.env.PORT || 3000
// app.set('port', port)
// const request = require('request');
//
// // MIDDLEWARE (transform stream)
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
//
//
// app.get('/*', (req, res) => {
//   let apiCall = req.url.slice('/'.length)
//   let apiReq = `https://maps.googleapis.com${apiCall}`
//   request.get(apiReq, (err, _, body) => {
//     res.send(body)
//   });
// });
//
// app.listen(port, () =>
//   console.log(`Listening on port: ${port}`)
// )

'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 6060
app.set('port', port)
const request = require('request');

// MIDDLEWARE (transform stream)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/api/petfinder/*', (req, res) => {
  let apiCall = req.url.slice('/api/petfinder/'.length)
  let apiReq = `http://api.petfinder.com/${apiCall}`
  request.get(apiReq, (err, _, body) => {
    res.send(body)
  });
});

app.listen(port, () =>
  console.log(`Listening on port: ${port}`)
)
