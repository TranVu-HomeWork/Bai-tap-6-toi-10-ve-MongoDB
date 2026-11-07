require('dotenv').config();

const mongoose = require('mongoose');
const Product = require('./models/Product');
const Order = require('./models/Order');

async function createOrder() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const product = await Product.findOne();

    if (!product) {
      throw new Error('Chưa có Product. Hãy chạy createProducts.js trước.');
    }

    const order = await Order.create({
      product_id: product._id,
      quantity: 2
    });

    console.log('Tạo đơn hàng thành công:');
    console.log(order);
  } catch (error) {
    console.error('Tạo đơn hàng thất bại:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

createOrder();