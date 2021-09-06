const express = require('express');
var bodyParser = require('body-parser')
const path = require('path');
const app = express();
const MailerLite = require('mailerlite-api-v2-node').default

const mailerLite = MailerLite('edd1c8cddfd55a3b27ec9bf0ad4a9d82')


app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});


app.post('/api/mail', (req, res) => {
    console.log(req.body);
  const mail = req.body;
  console.log('Adding user:::::', mail);

  mailerLite.addSubscriberToGroup(108014935, mail).then((acc) => {
    res.json(true);
  },
  (acc) => {
      res.json(false);
  })
});


app.listen(3080, () => {
    console.log(`Server listening on the port::${3080}`);
});