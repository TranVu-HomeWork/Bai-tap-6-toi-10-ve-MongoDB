require('dotenv').config();

const mongoose = require('mongoose');
const Product = require('./models/Product');

async function createProduct() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const product = await Product.create({
      name: 'Bàn phím cơ Keychron',
      price: 1500000,
      category: 'Phụ kiện máy tính'
    });

    console.log('Tạo sản phẩm thành công:');
    console.log(product);
  } catch (error) {
    console.error('Validation lỗi:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

createProduct();