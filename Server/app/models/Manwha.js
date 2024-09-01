const mongoose = require('mongoose');

const manwhaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        maxLength: [50, 'Title cannot be more than 50 characters']
    },
    genre: {
        type: [String],
        required: [true, 'At least one genre is required'],
        enum: [
            'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 
            'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Slice of Life', 
            'Thriller'
        ]
    },
    averageRating: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating cannot be more than 10'],
        default: 1 // Sets a default value for ratings if not provided
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: [true, 'An author is required']
    }
}, {
    timestamps: true // Automatically add createdAt and updatedAt timestamps
});

module.exports = mongoose.model('Manwha', manwhaSchema);
