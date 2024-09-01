const Authors = require('../models/Authors');

const getAllAuthors = async (req, res) => {
    try {
        const authors = await Authors.find({});
        res.status(200).json({
            data: authors,
            success: true,
            message: "All authors retrieved successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve authors: " + error.message
        });
    }
};

const getAuthorByID = async (req, res) => {
    try {
        const author = await Authors.findById(req.params.id);
        if (!author) {
            return res.status(404).json({
                success: false,
                message: "Author not found"
            });
        }
        res.status(200).json({
            data: author,
            success: true,
            message: "Author retrieved successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving author: " + error.message
        });
    }
};

const createAuthor = async (req, res) => {
    try {
        const { author } = req.body;
        const newAuthor = await Author.create(author);  // Assuming the model is named 'Author'
        res.status(201).json({
            data: newAuthor,
            success: true,
            message: `${req.method} - Author created successfully`
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Failed to create author: ${error.message}`
        });
    }
};

const updateAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const author = await Authors.findByIdAndUpdate(id, updates, { new: true });
        if (!author) {
            return res.status(404).json({
                success: false,
                message: "Author not found"
            });
        }
        res.status(200).json({
            data: author,
            success: true,
            message: "Author updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update author: " + error.message
        });
    }
};

const deleteAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const author = await Authors.findByIdAndDelete(id);
        if (!author) {
            return res.status(404).json({
                success: false,
                message: "Author not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Author deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete author: " + error.message
        });
    }
};

module.exports = {
    createAuthor,  
    getAllAuthors,
    getAuthorByID,
    updateAuthor,
    deleteAuthor
};
