require('dotenv').config();

const mongoose = require('mongoose');
const Product = require('./models/Product');

async function createProducts() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const products = await Product.insertMany([
      { name: 'Laptop Dell Inspiron', price: 18000, category: 'Laptop' },
      { name: 'iPhone 13 Mobile', price: 19000, category: 'Mobile' },
      { name: 'Laptop Gaming Asus', price: 25000, category: 'Laptop' },
      { name: 'Tai nghe Bluetooth', price: 500, category: 'Accessory' }
    ]);

    console.log('Đã thêm dữ liệu test:');
    console.log(products);
  } catch (error) {
    console.error('Thêm dữ liệu thất bại:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

createProducts();