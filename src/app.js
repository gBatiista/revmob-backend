const express = require('express');
const cors = require('cors')
const campaignsRoutes = require('./routes/campaignsRoutes');

const app = express();

app.use(cors())
app.use(express.json());
app.use(campaignsRoutes);

module.exports = app;

