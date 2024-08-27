const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Connection URI is checked here
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to MongoDB successfully ${conn.connection.host}`);
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1); // Optionally exit process on failure to connect
    }
};

module.exports = connectDB;
