require('dotenv').config();

const mongoose = require('mongoose');
const Order = require('./models/Order');

async function findOrderWithProduct() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const order = await Order.findOne().populate('product_id');

    if (!order) {
      console.log('Chưa có đơn hàng.');
      return;
    }

    console.log('Đơn hàng kèm chi tiết sản phẩm:');
    console.log(JSON.stringify(order, null, 2));
  } catch (error) {
    console.error('Truy vấn thất bại:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

findOrderWithProduct();