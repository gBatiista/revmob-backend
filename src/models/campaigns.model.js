const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CampaignsSchema = new Schema({
  title: String,
  description: String,
  image: String,
  conversion_type: String,
  bid: Number,
  country: String
});

const campaignsModel = mongoose.model('campaigns', CampaignsSchema);

module.exports = campaignsModel;