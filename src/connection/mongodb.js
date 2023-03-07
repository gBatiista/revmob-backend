const mongoose = require('mongoose');
require('dotenv').config();

const startDB = async () => {

  await mongoose.connect(process.env.DB_URL);
};

module.exports = startDB;