require('dotenv').config();

const mongoose = require('mongoose');
const Movie = require('./models/Movie');

async function createMovies() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const movies = await Movie.insertMany([
      {
        title: 'Avengers: Endgame',
        duration: 181,
        isReleased: true,
        genres: ['Action', 'Adventure', 'Sci-Fi']
      },
      {
        title: 'Inception',
        duration: 148,
        isReleased: true,
        genres: ['Action', 'Sci-Fi', 'Thriller']
      },
      {
        title: 'Dune: Part Three',
        duration: 165,
        isReleased: false,
        genres: ['Adventure', 'Drama', 'Sci-Fi']
      },
      {
        title: 'The Godfather',
        duration: 175,
        isReleased: true,
        genres: ['Crime', 'Drama']
      }
    ]);

    console.log('Đã thêm 4 bộ phim:');
    console.log(movies);
  } catch (error) {
    console.error('Thêm phim thất bại:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

createMovies();