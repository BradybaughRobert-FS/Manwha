const mongoose = require('mongoose');

const manwhaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: [50, 'Title cannot be more than 50 characters'],
    },
    genre: {
        type: [String],
        required: true,
        enum: [
            'Thriller', 'Slice of Life', 'Sci-Fi', 'Romance', 
            'Mystery', 'Horror', 'Fantasy', 'Drama', 'Comedy', 
            'Adventure', 'Action'
        ]
    },
    averageRating: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating cannot be more than 10'],
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Manwha', manwhaSchema);
