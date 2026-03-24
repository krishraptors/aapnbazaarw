const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    cropName: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    cropType: {
      type: String,
      trim: true,
    },
    season: {
      type: String,
      enum: ['Kharif', 'Rabi', 'Zaid', 'Perennial'],
    },
    state: {
      type: String,
      trim: true,
    },
    market: {
      type: String,
      trim: true,
    },
    grade: {
      type: String,
      trim: true,
    },
    farmerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
