const router = require('express').Router();
const {addReaction, removeReaction } = require('../controller/thoughtsController');
const {getUsers, createUser, getSingleUser, updateUser, deleteUser, addFriend, removeFriend} = require('../controller/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendID').put(addFriend).delete(removeFriend);

module.exports = router;