require("dotenv").config(); // Ensure this is at the very top to load environment variables first
const app = require("./app"); // Assuming 'app' is your Express application module
const connectDB = require("./app/db/config"); // Database connection setup

connectDB();

const PORT = process.env.PORT || 3000; // Use PORT from environment variables if available, otherwise default to 3000

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
