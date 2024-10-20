// routes/serviceRoutes.js
const express = require('express');
const { addService, getAllServices, updateService, deleteService } = require('../controllers/serviceController.js');
const router = express.Router();

router.post('/', addService);
router.get('/', getAllServices);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

module.exports = router;
