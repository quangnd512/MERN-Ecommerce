const express = require('express');
const { signup, signin, requireSingin } = require('../controller/auth');
const router = express.Router();


router.post('/signin', signin);
router.post('/signup', signup);

// router.post('/profile', requireSingin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// });


module.exports = router;