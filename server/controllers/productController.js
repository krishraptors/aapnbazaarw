const repository = require('../store/golamartRepository');

const createProduct = async (req, res, next) => {
  try {
    const { farmerName, farmerPhone, cropName, price, quantity, cropType, season, state, market, grade } = req.body;

    if (!farmerName || !farmerPhone || !cropName) {
      return res.status(400).json({ message: 'Farmer name, phone, and crop name are required.' });
    }

    if (Number(price) <= 0 || Number(quantity) <= 0) {
      return res.status(400).json({ message: 'Price and quantity must be greater than zero.' });
    }

    const farmer = await repository.findOrCreateUser({
      name: farmerName,
      phone: farmerPhone,
      role: 'farmer',
    });

    const product = await repository.createProduct({
      cropName,
      price,
      quantity,
      cropType,
      season,
      state,
      market,
      grade,
      farmerId: farmer._id,
    });

    return res.status(201).json({ product });
  } catch (error) {
    return next(error);
  }
};

const getProducts = async (req, res, next) => {
  try {
    const products = await repository.listProducts({
      cropName: req.query.cropName,
      maxPrice: req.query.maxPrice,
      cropType: req.query.cropType,
      season: req.query.season,
      state: req.query.state,
    });

    return res.json({ products });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createProduct,
  getProducts,
};
