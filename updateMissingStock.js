require('dotenv').config();

const mongoose = require('mongoose');
const Product = require('./models/Product');

async function updateMissingStock() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const productsWithoutStock = await Product.find({
      stock: { $exists: false }
    });

    console.log(`Sản phẩm chưa có stock: ${productsWithoutStock.length}`);

    const result = await Product.updateMany(
      {
        stock: { $exists: false }
      },
      {
        $set: { stock: 10 }
      }
    );

    console.log('Cập nhật hoàn tất:');
    console.log(`Số document tìm thấy: ${result.matchedCount}`);
    console.log(`Số document đã sửa: ${result.modifiedCount}`);
  } catch (error) {
    console.error('Cập nhật thất bại:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

updateMissingStock();