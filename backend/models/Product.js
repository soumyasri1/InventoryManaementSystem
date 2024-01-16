// models/Product.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Product = db.sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  discountPercentage: {
    type: DataTypes.FLOAT,
  },
  rating: {
    type: DataTypes.FLOAT,
  },
  stock: {
    type: DataTypes.INTEGER,
  },
  brand: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },

  thumbnail: {
    type: DataTypes.STRING,
  },
  images: {
    type: DataTypes.TEXT,
    get() {
      const rawValue = this.getDataValue('images');
      return rawValue ? rawValue.split(',') : [];
    },
    set(value) {
      this.setDataValue('images', Array.isArray(value) ? value.join(',') : value);
    },
  },
});


module.exports = Product;
