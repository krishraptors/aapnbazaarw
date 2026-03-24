const repository = require('../store/golamartRepository');

const createBadRequest = (message) => {
  const error = new Error(message);
  error.statusCode = 400;
  return error;
};

const createOrder = async (req, res, next) => {
  try {
    const { buyerName, buyerPhone, products } = req.body;

    if (!buyerName || !buyerPhone) {
      return res.status(400).json({ message: 'Buyer name and phone are required.' });
    }

    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ message: 'At least one product is required.' });
    }

    const buyer = await repository.findOrCreateUser({
      name: buyerName,
      phone: buyerPhone,
      role: 'buyer',
    });
    const productIds = products.map((item) => item.productId);
    const inventory = await repository.getProductsByIds(productIds);
    const inventoryMap = new Map(inventory.map((item) => [String(item._id), item]));

    const orderItems = products.map((item) => {
      const stockItem = inventoryMap.get(String(item.productId));

      if (!stockItem) {
        throw createBadRequest(`Product not found for id ${item.productId}`);
      }

      if (Number(item.quantity) <= 0) {
        throw createBadRequest(`Quantity must be greater than zero for ${stockItem.cropName}`);
      }

      if (stockItem.quantity < Number(item.quantity)) {
        throw createBadRequest(`Insufficient quantity available for ${stockItem.cropName}`);
      }

      return {
        productId: stockItem._id,
        cropName: stockItem.cropName,
        quantity: Number(item.quantity),
        price: Number(item.price ?? stockItem.price),
      };
    });

    await repository.decrementProductQuantities(orderItems);

    const totalAmount = orderItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const order = await repository.createOrder({
      buyerId: buyer._id,
      products: orderItems,
      totalAmount,
      status: 'pending',
    });

    return res.status(201).json({ order });
  } catch (error) {
    return next(error);
  }
};

const getOrders = async (_req, res, next) => {
  try {
    const orders = await repository.listOrders();

    return res.json({ orders });
  } catch (error) {
    return next(error);
  }
};

const updateOrderStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    if (!['pending', 'completed'].includes(status)) {
      return res.status(400).json({ message: 'Status must be pending or completed.' });
    }

    const order = await repository.updateOrderStatus(req.params.id, status);

    if (!order) {
      return res.status(404).json({ message: 'Order not found.' });
    }

    return res.json({ order });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createOrder,
  getOrders,
  updateOrderStatus,
};
