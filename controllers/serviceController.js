// controllers/serviceController.js
const Service = require('../models/service.js');

// @desc    Add a new service
// @route   POST /api/services
// controllers/serviceController.js

// @desc    Add multiple new services
// @route   POST /api/services
// @desc    Add a new service
// @route   POST /api/services
exports.addService = async (req, res) => {
    try {
        const { name, description, price } = req.body;
    
        // Allow default values (null) if 'name' or 'price' are not provided
        const serviceName = name || null;
        const servicePrice = price || null;
    
        if (!servicePrice) {
            return res.status(400).json({ message: 'Price is a required field' });
        }
        if (!serviceName && !serviePrice) {
            return res.status(400).json({ message: 'Name is a required field' });
        }
        const service = new Service({ 
            name: serviceName, 
            description: description || null, // description can also default to null if not provided
            price: servicePrice 
        });
        
        await service.save();
        res.status(201).json(service);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
    
;

// @desc    Get all services
// @route   GET /api/services
exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update a service
// @route   PUT /api/services/:id
exports.updateService = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const service = await Service.findByIdAndUpdate(req.params.id, { name, description, price }, { new: true, runValidators: true });
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json(service);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a service
// @route   DELETE /api/services/:id
exports.deleteService = async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
