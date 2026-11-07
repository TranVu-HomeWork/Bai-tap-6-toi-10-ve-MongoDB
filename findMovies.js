require('dotenv').config();

const mongoose = require('mongoose');
const Movie = require('./models/Movie');

async function findMovies() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const movies = await Movie.find({
      genres: { $in: ['Action', 'Horror'] },
      isReleased: true
    });

    console.log('Phim Action hoặc Horror đã phát hành:');
    console.log(movies);
  } catch (error) {
    console.error('Truy vấn thất bại:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

findMovies();