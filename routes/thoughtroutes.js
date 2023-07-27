const router = require('express').Router();
const {getThoughts, getSingleThought, createThought, deleteThought, updateThought, addReaction, removeReaction} = require('../controller/thoughtsController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtID').get(getSingleThought).delete(deleteThought).put(updateThought);

router.route('/:thoughtID/reactions').put(addReaction).delete(removeReaction);


module.exports = router;