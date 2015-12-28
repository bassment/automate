var path = require('path');
var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var stormpath = require('express-stormpath');

var port = 3000;
var domain = 'pixelant.space';

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'anton.perebyinis@gmail.com',
    pass: process.env.GMAIL
  }
});

app.use(stormpath.init(app, {
  website: true,
  web: {
    spaRoot: __dirname
  }
}));

var mailOptions = {
  from: 'Anton Perebyinis <anton.perebyinis@gmail.com>',
  to: 'anton.perebyinis@pixelant.se',
  subject: 'Tests'
};

app.post('/api/test', function (req, res) {
  mailOptions.html = Object.keys(req.body)[0]
  transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: ' + info.response);
    });
})

app.on('stormpath.ready', function () {
  console.log('Stormpath Ready');

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });

  app.listen(port, function(err) {
    if (err) {
      console.log(err);
    }

    console.info("==> 🌎 Listening on port %s. Open up http:%s in your browser.", port, domain);
  });
});
