const { Router } = require('express');
const campaignsController = require('../controllers/campaigns.controller');

const routes = Router();

routes.post('/', campaignsController.createCampaign);

routes.get('/fetch', campaignsController.getBestCampaign);

routes.get('/fetch/all', campaignsController.getAll);

routes.delete('/', campaignsController.deleteAd);

module.exports = routes;