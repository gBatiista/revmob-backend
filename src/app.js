const express = require('express');
const campaignsRoutes = require('./routes/campaignsRoutes');

const app = express();

app.use(express.json());
app.use(campaignsRoutes);

module.exports = app;

