const mongoose = require('mongoose');
const {thoughtSchema} = require('./Thought');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trimmed: true},
    email: { type: String, unique: true, required: [true, `User email is required`],
        validate: {
            validator: function(v) {
                return /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/.test(v);
            },
            message: props => `${props.value} is not a valid email`
        },
    },
    thoughts: [thoughtSchema],
    friends: [this],
});
const User = mongoose.model('User', UserSchema);

let userlist = [
    { username: "test3", email: "test3@test.com", thoughts:[
        {thought: "I like this video", username: "test3", reactions:[
            {reactionBody:"Come to brazil", username:"test8"}
        ] }
    ], friends:[
        {username: "test4", email:"test4@test.com", thoughts:[], friends:[]},
        {username: "test5", email:"test5@test.com", thoughts:[], friends:[]},
    ]},
    { username: "test4", email: "test4@test.com", thoughts:[], friends:[
        {username: "test6", email:"test6@test.com", thoughts:[], friends:[]},
        {username: "test7", email:"test7@test.com", thoughts:[], friends:[]},
    ]},
    { username: "test5", email: "test5@test.com", thoughts:[], friends:[]},
    { username: "test6", email: "test6@test.com", thoughts:[], friends:[]},
    { username: "test7", email: "test7@test.com", thoughts:[], friends:[]},
    { username: "test8", email: "test8@test.com", thoughts:[], friends:[]},
];

User.find({}).exec().then(async collection =>{
    if(collection.length === 0){
        const results = await User.insertMany(
            userlist
        );
        return console.log('Users Successfully inserted', results);
    }
    return console.log('We have enough test data');
}).catch(err => console.log(err));


module.exports = User;