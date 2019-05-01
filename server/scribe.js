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

var Message = mongoose.model('Message', messageSchema);

var scribe = {
    record : (req, res)=>{
        var message = new Message({userName: req.body.userName, time: 1, text: req.body.text});
        message.save(function (err, message) {
            if (err) return console.error(err);
            res.send(201);
        });
    },
    read : (req, res)=>{
        Message.find((err, messages)=>{
            if (err) return console.error(err);
            res.send(200, messages);
        });
    }
};

module.exports = scribe;