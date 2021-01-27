const express = require('express');
const router = express();
const UserController = require('../controllers/UserController');

router.get('/usuarios', UserController.index);
router.post('/usuarios', UserController.register);
router.put('/usuarios', UserController.edit);
router.delete('/usuario/:id', UserController.remove);

module.exports = router;