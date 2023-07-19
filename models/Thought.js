const { ObjectId } = require('bson');
const mongoose = require('mongoose');

// let Schmea = new mongoose.Schema(ObjectId = Schema.ObjectID);

const reactionSchema = new mongoose.Schema({
    reactionID: {type:ObjectId, auto:true},
    reactionBody: {type:String, required:true, maxLength:280},
    username: {type:String, required:true},
    createdAt: {type:Date, default: Date.now}
});
const thoughtSchema = new mongoose.Schema({
    thought: {type:String, required: true, minLength:0, maxLength:280},
    username: {type:String, required: true},
    createdAt: {type:Date, default: Date.now},
    reactions:[reactionSchema]
});


const Thought = mongoose.model('Thought', thoughtSchema);

const handleError = (err) => console.error(err);

module.exports = {Thought, thoughtSchema};