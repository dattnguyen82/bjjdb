var express = require('express');
var pg = require('pg');
var conString = "postgres://zuktmeqgijrqvk:IJTJFbxJpg8d7fyJ5N2P1s6e0g@ec2-50-19-227-171.compute-1.amazonaws.com:5432/dbe6e2j6v1ah3l";

var client = new pg.Client(conString);
client.connect();


var app = express();

app.set('port', (process.env.PORT || 5000));


var router = express.Router();

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
