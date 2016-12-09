var express = require('express');
var pg = require('pg');
var conString = process.env.DATABASE_URL;

var client = new pg.Client(conString);
// client.connect();

// const query = client.query();

// query.on('end', () => { client.end(); });

var app = express();

app.set('port', (process.env.PORT || 5000));


var router = express.Router();


router.get('/info', function(req, res) {
    res.json({ database: process.env.DATABASE_URL });
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
