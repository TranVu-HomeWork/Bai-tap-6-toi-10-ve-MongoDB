require('dotenv').config();

const mongoose = require('mongoose');
const User = require('./models/User');

async function createUsers() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const users = await User.insertMany([
      { name: 'Nguyễn Văn An', age: 20 },
      { name: 'Trần Thị Bình', age: 22 },
      { name: 'Lê Minh Cường', age: 25 }
    ]);

    console.log('Thêm người dùng thành công:');
    console.log(users);
  } catch (error) {
    console.error('Thêm dữ liệu thất bại:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

createUsers();