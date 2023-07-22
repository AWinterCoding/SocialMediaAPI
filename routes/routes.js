const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtroutes');


router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

router.use((req, res) => res.send('Route doesn\'t exist'));

module.exports = router;