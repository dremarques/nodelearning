var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/parking').connection;

db.on('open', function() {
    console.log('Mongo db is connected');
});

db.on('error', function() {
    console.log('Mongo error');
});

return db;