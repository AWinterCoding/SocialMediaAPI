const router = require('express').Router();
const {getUsers, createUser, getSingleUser, updateUser, deleteUser} = require('../controller/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userID').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;