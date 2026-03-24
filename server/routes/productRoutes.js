const express = require('express');
const { createProduct, getProducts } = require('../controllers/productController');

const router = express.Router();

router.route('/').post(createProduct).get(getProducts);

module.exports = router;
