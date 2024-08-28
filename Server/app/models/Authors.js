const mongoose = require('mongoose');

const authorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Author name is required'],
        trim: true,
        maxLength: [100, 'Author name cannot exceed 100 characters']
    },
    age: {
        type: Number,
        min: [10, 'Minimum age is 10 years'], // Assuming authors are at least 10 years old
        max: [120, 'Maximum age is 120 years'] // Assuming authors are not older than 120 years
    },
    description: {
        type: String,
        trim: true,
        maxLength: [1000, 'Description cannot exceed 1000 characters']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    manwha: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Manwha'
    }],
    totalManwha: {
        type: Number,
        default: 0  // Assuming you want to start counting from 0 and update as Manwha are added.
    }
}, {
    timestamps: true // Optionally manage createdAt and updatedAt timestamps
});

module.exports = mongoose.model('Author', authorsSchema);
