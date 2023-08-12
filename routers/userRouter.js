const express = require('express');

const router = express.Router();

const { body } = require('express-validator');

const multer = require('multer');

const userController = require('../controllers/userController');

const adminMiddleware = require('../middlewares/adminMiddleware');



router.get('/', userController.home);
router.get('/admin', adminMiddleware.ckeckAdmin, userController.admin);
router.get('/services', userController.services);
router.get('/services/design', userController.design);


module.exports = router;