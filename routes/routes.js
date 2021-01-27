const express = require('express');
const router = express();
const UserController = require('../controllers/UserController');

router.get('/usuarios', UserController.index);
router.post('/usuarios', UserController.register);
router.put('/usuarios', UserController.edit);

module.exports = router;