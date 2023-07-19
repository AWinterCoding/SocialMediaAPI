const router = require('express').Router();
const {getUsers} = require('../controller/userController');

router.route('/').get(getUsers).post();

module.exports = router;