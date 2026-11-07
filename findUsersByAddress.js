require('dotenv').config();

const mongoose = require('mongoose');
const User = require('./models/User');

async function findUsersByAddress() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const users = await User.find({
      'address.city': 'Hanoi',
      age: { $gt: 20 }
    });

    console.log('Người dùng ở Hanoi và trên 20 tuổi:');
    console.log(users);
  } catch (error) {
    console.error('Truy vấn thất bại:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

findUsersByAddress();