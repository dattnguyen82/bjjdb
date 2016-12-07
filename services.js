var express = require('express');
var pg = require('pg');
// var conString = "postgres://ribgvubpumktok:b_FGDg-TAOB8-AqBXjpMDS8e_G@ec2-54-235-123-159.compute-1.amazonaws.com:5432/d8lv2q1l368s7i";
//
// var client = new pg.Client(conString);
// client.connect();


var app = express();

app.set('port', (process.env.PORT || 5000));


var router = express.Router();


router.get('/info', function(req, res) {
    res.json({ database: process.env });
});

router.get('/', function(req, res) {
    res.json({ message: 'BJJ-DB' });   
});


router.get('/competitors', function(req, res) {
    res.json({ message: 'BJJ-DB' });
});

app.use('/api', router);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
