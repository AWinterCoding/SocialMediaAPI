const router = require('express').Router();
const {addReaction, removeReaction } = require('../controller/thoughtsController');
const {getUsers, createUser, getSingleUser, updateUser, deleteUser} = require('../controller/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionsId').delete(removeReaction);

module.exports = router;