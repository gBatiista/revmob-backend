const campaignsModel = require('../models/campaigns.model');

class campaignsController {
  createCampaign = async (req, res) => {
    const createdCampaign = await campaignsModel.create(req.body);

    return res.status(201).json(createdCampaign);
  };

  getBestCampaign = async (req, res) => {
    const { country }  = req.query;
    const campaigns = await campaignsModel.find().select('-__v');


    if (country) {
      const allowedCampaigns = campaigns.filter((campaign) => campaign.country === country.toUpperCase() || campaign.country === 'ALL');
  
      const [result] = allowedCampaigns.sort((a, b) => b.bid - a.bid);

      return res.status(200).json(result);
    }

    const [result] = campaigns.sort((a, b) => b.bid - a.bid);

    return res.status(200).json(result);

  };

  getAll = async (req, res) => {
    const campaigns = await campaignsModel.find().select('-__v');

    return res.status(200).json(campaigns);
  };

  deleteAd = async (req, res) => {
    const { id } = req.body;

    const campaigns = await campaignsModel.find().select('-__v');
    const exist = campaigns.some((campaign) => campaign.id === id)

    if (exist) {
      const response = await campaignsModel.deleteOne({ _id: id });
      return res.status(202).json(response);
    }

    return res.status(400).json({ message: "Error: wrong ID" })
  };

};

module.exports = new campaignsController;