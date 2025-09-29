const mongoose = require('mongoose');

const dbConnection = async() => {
  try {
    await mongoose.connect(process.env.DB_CNN);
    console.log('Database online');
  } catch (error) {
    console.error();
    throw new Error('Database connection error.');
  }
}

module.exports = { dbConnection }