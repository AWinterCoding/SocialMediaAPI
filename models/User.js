const mongoose = require('mongoose');
const {thoughtSchema} = require('./Thought');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trimmed: true},
    email: { type: String, unique: true, required: [true, `User email is required`],
        validate: {
            validator: function(v) {
                return /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/.test(v);
            },
            message: props => `${props.value} is not a avalid email`
        },
    },
    thoughts: [thoughtSchema],
    friends: [UserSchema],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;