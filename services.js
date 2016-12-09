var express = require('express');
var pg = require('pg');
var conString = process.env.DATABASE_URL;

var client = new pg.Client(conString);
client.connect();

// const query = client.query(
//     'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
// query.on('end', () => { client.end(); });

var app = express();

app.set('port', (process.env.PORT || 5000));


var router = express.Router();


router.get('/info', function(req, res) {
    res.json({ database: process.env.DATABASE_URL });
});


router.get('/competitors', function(req, res) {

    pg.connect(conString, (err, client, done) =>
    {
        // Handle connection errors
        if(err)
        {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }
        // SQL Query > Select Data
        const query = client.query('SELECT * FROM bjjdb.competitors');
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            console.log(results)
            return res.json(results);
        });
    });

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
