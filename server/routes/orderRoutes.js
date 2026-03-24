const express = require('express');
const {
  createOrder,
  getOrders,
  updateOrderStatus,
} = require('../controllers/orderController');

const router = express.Router();

router.route('/').post(createOrder).get(getOrders);
router.patch('/:id/status', updateOrderStatus);

module.exports = router;
