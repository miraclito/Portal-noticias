const express = require('express');
const router = express.Router();
const scraperController = require('../controllers/scraperController');
const { authMiddleware, isAdmin } = require('../middleware/auth');

// Solo admin puede ejecutar scrapers
router.get('/list', scraperController.listScrapers);
router.post('/run', authMiddleware, isAdmin, scraperController.runAllScrapers);
router.post('/run/:scraperName', authMiddleware, isAdmin, scraperController.runSpecificScraper);
router.get('/stats', authMiddleware, scraperController.getStats);
module.exports = router;
