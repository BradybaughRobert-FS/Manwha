const Manwha = require('../models/manwha');
const authors = require('../models/Authors');

const getManwhas = async (req, res) => {
    try {
        const manwhas = await Manwha.find({});
        res.status(200).json({
            data: manwhas,
            success: true,
            message: `${req.method} - Manwha request successful`
        });
    } catch ({ message}) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve manwhas: " + error.message
        });
    }
};

const getManwhaByID = async (req, res) => {
    try {
        const { id } = req.params;
        const manwha = await Manwha.findById(id).populate('author');

        if (!manwha) {
            return res
                .status(404)  // Changed to 404 as it's more appropriate for not found resources
                .json({ success: false, message: "Manwha not found" });
        }
        res.status(200).json({
            data: manwha,
            success: true,
            message: `${req.method} - Manwha request successful`
        });
    } catch ({message}) {
        res.status(500).json({
            success: false,
            message,
        });
    }
};

const createManwha = async (req, res) => {
    try {
        //const manwhaData = await Manwha.create(Manwha);
        const {manwha} = req.body;
        //manwha.author > is the _id for the author model;
        //'66d28d8d9b40f33f58cac501' > is the _id for the author model;
        const user = await Authors.findById(book.author);
        //attaching the actual author object to the manwha
        manwha.auhtor = user;
        // creates a new manwha model
        const manwhaData = new Manwha(manwha);
        // push the manwha id to the user.manwhas array
        user.manwhas.push(manwhaData._id);
        // saves the manwha and the user data
        const queries = [manwhaData.save(), user.save()];
        await Promise.all(queries);

        // const { author, ...manwhaOnly } = manwhaData._doc;
        // console.log('>>>', manwhaOnly);

        res.status(200).json({
            data: manwhaData,
            success: true,
            message: `${req.method} - Manwha request made`
        });
        } catch (error) {
            res.status(500).json({
                success: false,
                message,
            });
        }
    };
;

const updateManwha = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const manwha = await Manwha.findByIdAndUpdate(id, updates, { new: true });
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
