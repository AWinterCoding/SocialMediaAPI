const router = require('express').Router();
const {getUsers, createUser, getSingleUser} = require('../controller/userController');

router.route('/users').get(getUsers).post(createUser);

router.route('/:userID').get(getSingleUser);

module.exports = router;