var mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true});
var db = mongoose.connection;
db.on('connected', function () {
    console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
   });
module.exports = mongoose;