require('dotenv').config();

const mongoose = require('mongoose');
const Product = require('./models/Product');

async function findProducts() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const products = await Product.find({
      category: { $in: ['Laptop', 'Mobile'] },
      price: { $lt: 20000 }
    });

    console.log('Laptop hoặc Mobile có giá dưới 20.000:');
    console.log(products);
  } catch (error) {
    console.error('Truy vấn thất bại:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

findProducts();