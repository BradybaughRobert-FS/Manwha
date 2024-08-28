const Manwha = require('../models/manwha')  // Ensure this points to the correct location of your Manwha model

// Retrieve all Manwhas
const getAllManwhas = async (req, res) => {
    try {
        const manwhas = await Manwha.find({});
        res.status(200).json({
            data: manwhas,
            success: true,
            message: "All manwhas retrieved successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve manwhas: " + error.message
        });
    }
};

// Retrieve a single Manwha by ID
const getManwhaByID = async (req, res) => {
    try {
        const manwha = await Manwha.findById(req.params.id);
        if (!manwha) {
            return res.status(404).json({
                success: false,
                message: "Manwha not found"
            });
        }
        res.status(200).json({
            data: manwha,
            success: true,
            message: "Manwha retrieved successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving manwha: " + error.message
        });
    }
};

// Create a new Manwha
const createManwha = async (req, res) => {
    try {
        const newManwha = await Manwha.create(req.body);
        res.status(201).json({
            data: newManwha,
            success: true,
            message: "Manwha created successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create manwha: " + error.message
        });
    }
};

// Update a Manwha
const updateManwha = async (req, res) => {
    try {
        const { id } = req.params;
        const manwha = await Manwha.findByIdAndUpdate(id, req.body, { new: true });
        if (!manwha) {
            return res.status(404).json({
                success: false,
                message: "Manwha not found"
            });
        }
        res.status(200).json({
            data: manwha,
            success: true,
            message: "Manwha updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update manwha: " + error.message
        });
    }
};

// Delete a Manwha
const deleteManwha = async (req, res) => {
    try {
        const { id } = req.params;
        const manwha = await Manwha.findByIdAndDelete(id);
        if (!manwha) {
            return res.status(404).json({
                success: false,
                message: "Manwha not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Manwha deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete manwha: " + error.message
        });
    }
};

module.exports = {
    createManwha,  
    getAllManwhas,
    getManwhaByID,
    updateManwha,
    deleteManwha
};