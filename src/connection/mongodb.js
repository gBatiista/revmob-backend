const mongoose = require('mongoose');
require('dotenv').config();

const startDB = async () => {

  await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@revmob.zsgyspn.mongodb.net/Revmob?retryWrites=true&w=majority`);
};

module.exports = startDB;