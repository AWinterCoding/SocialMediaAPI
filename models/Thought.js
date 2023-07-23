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

thoughtlist = [
    {thought:"thought1", username:"test4", reactions:[]},
    {thought:"thought2", username:"test5", reactions:[]},
    {thought:"thought3", username:"test6", reactions:[]},
    {thought:"thought4", username:"test7", reactions:[]},
    {thought:"thought5", username:"test8", reactions:[]},
    {thought:"thought6", username:"test8", reactions:[]},
];

Thought.find({}).exec().then(async collection =>{
    if(collection.length === 0){
        const results = await Thought.insertMany(
            thoughtlist
        );
        return console.log('Thoughts Successfully inserted', results);
    }
    return console.log('We have enough test data');
}).catch(err => console.log(err));



const handleError = (err) => console.error(err);

module.exports = {Thought, thoughtSchema};