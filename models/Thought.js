const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thought: {type:String, required: true, minLength:0, maxLength:280},
    username: {type:String, required: true},
    createdAt: {type:Date, default: Date.now},
    reactions:[reactionSchema]
});

const reactionSchema = new mongoose.Schema({
    reactionID: mongoose.ObjectID,
    reactionBody: {type:String, required:true, maxLength:280},
    username: {type:String, required:true},
    createdAt: {type:Date, default: Date.now}
});

const Thought = mongoose.model('Thought', thoughtSchema);

const handleError = (err) => console.error(err);

module.exports = Thought;