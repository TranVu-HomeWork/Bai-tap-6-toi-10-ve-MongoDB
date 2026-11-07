require('dotenv').config();

const mongoose = require('mongoose');
const User = require('./models/User');

async function createUsersWithAddress() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await User.insertMany([
      {
        name: 'Phạm Minh Đức',
        age: 24,
        address: { city: 'Hanoi', country: 'Vietnam' }
      },
      {
        name: 'Vũ Thu Hà',
        age: 19,
        address: { city: 'Hanoi', country: 'Vietnam' }
      },
      {
        name: 'Hoàng Nam',
        age: 28,
        address: { city: 'Da Nang', country: 'Vietnam' }
      }
    ]);

    console.log('Đã thêm user có address.');
  } catch (error) {
    console.error('Thêm dữ liệu thất bại:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

createUsersWithAddress();