require('dotenv').config();

const mongoose = require('mongoose');
const Store = require('./models/Store');

async function createStore() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const store = await Store.create({
      name: 'Cửa hàng công nghệ Rikkei',
      location: {
        street: 'Số 8 Tôn Thất Thuyết',
        district: 'Nam Từ Liêm',
        city: 'Hanoi'
      }
    });

    console.log('Tạo cửa hàng thành công:');
    console.log(store);
  } catch (error) {
    console.error('Tạo cửa hàng thất bại:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

createStore();