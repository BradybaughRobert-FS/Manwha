const mongoose = require('mongoose');

const authorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Author name is required'],
        unique: true,
        trim: true,
        maxLength: [50, 'Author name cannot exceed 100 characters']
    },
    age: {
        type: Number,
        required: [true, 'Author age is required'],
        min: [10, 'Minimum age is 10 years'], // Assuming authors are at least 10 years old
        max: [120, 'Maximum age is 120 years'] // Assuming authors are not older than 120 years
    },
    email: {
        type: String,
        match: [
            /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            "Please provide a valid email address"
        ]
    },
    description: {
        type: String,
        trim: true,
        maxLength: [1000, 'Description cannot exceed 1000 characters']
    },    
    manwha: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Manwha'
    },
 ],
    totalManwha: Number,
    
}, {
    timestamps: true // Optionally manage createdAt and updatedAt timestamps
});

module.exports = mongoose.model('Author', authorsSchema);
