var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chat', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

//define schema
var messageSchema = new mongoose.Schema({
    userName: String,
    time: Number,
    text: String
});

//define model
var Message = mongoose.model('Message', messageSchema);

//define controller
var scribe = {
    //accepts a post request with a username and text and saves it to the database
    record : (req, res)=>{ 
        var message = new Message({
                userName: req.body.userName, 
                time: Date.now(), //timestamp the message
                text: req.body.text});
        message.save(function (err, message) {
            if (err) return console.error(err);
            res.send(201);
        });
    },
    //responds to a request with a list off all messages in the database
    read : (req, res)=>{
        Message.find((err, messages)=>{
            if (err) return console.error(err);
            res.send(200, messages);
        });
    }
};

module.exports = scribe;