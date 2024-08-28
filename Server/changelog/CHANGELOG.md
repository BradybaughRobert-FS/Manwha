# Changelog

## [Unreleased]
- Added in `manwhaCtrl.js` under `controller` folder
- Created `Manwha.js underneath` under `models` folder
- Resolved server startup error by changing the listening port to 5001 in the `.env` file to avoid the EADDRINUSE error.
- Corrected a typo in `authorController.js` from `createAuthors` to `createAuthor` for consistent naming and proper module exports.
- Integrated controller functions into `authorRoutes.js` for CRUD operations, linking routes to their respective controller functions for creating, reading, updating, and deleting authors.
- Configured MongoDB connection setup in `config.js` within the `db` folder, using Mongoose for database interactions.
- Created `db` and `controller` folders within the `app` directory to organize database configurations and business logic handling, respectively.
- Created a `.env` file in the main project directory to manage environment variables securely.
- Expanded `authorRoutes.js` to include CRUD operations:
  - Added a `POST` route to create new authors.
  - Added a `PUT` route to update existing authors by ID.
  - Added a `DELETE` route to delete authors by ID.
- Addressed an issue where changes in `authorRoutes.js` were not saved before testing with Postman, leading to confusion and error messages.
- Enhanced `authorRoutes.js` to include routes for fetching all authors and a specific author by ID, providing detailed responses for API calls.
- Updated `index.js` in the `routes` folder to integrate `authorRoutes`, managing author-related operations under the `/authors` path.
- Corrected and finalized the setup for `authorRoutes.js` in the `routes` folder with the correct router initialization and a route to handle requests to the Author endpoint.
- Updated `index.js` in the `routes` folder to properly include and utilize the `routes` handler, providing a foundational structure for API endpoints.
- Corrected the import statement for `routes` in `index.js` to ensure proper path referencing.
- Added `index.js` inside the `routes` folder with a basic route that responds with request method details.
- Created a `routes` folder inside the `app` folder to organize routing logic.
- Corrected the console log statement in `server.js` to use backticks for dynamic port display.
- Corrected `package.json` to fix a missing comma in the scripts section and moved `nodemon` to `devDependencies`.
- Updated `server.js` to include:
  - `require("dotenv").config();`
  - `const app = require("./app");`
  - `const PORT = process.env.PORT || 3000;`
  - `app.listen(PORT, () => { console.log('Server is running on ${PORT}'); });`
- Set up a basic Express server inside `index.js` in the `app` folder with:
  - `const express = require('express');`
  - `const app = express();`
  - `app.get('/', (req, res) => { res.status(200).json({message: "API is running", success: true}); });`
  - `module.exports = app;`
- Created a folder called `app` for organizing application components.
- Installed `nodemon` using npm to assist in automatically restarting the server during development.
- Created a `.gitignore` file and added `.env` and `node_modules` to it to prevent tracking of environment secrets and dependencies.
- Installed `express`, `dotenv`, and `morgan` packages using npm.
- Initialized npm with default settings using `npm init -y`.
- Created the `changelog` directory and started a `CHANGELOG.md` file.
- Enhanced `authorController.js` to fully support CRUD operations with proper error handling and status messages.
- Updated CRUD operations in `authorController.js` to interact dynamically with MongoDB, reflecting real-time data changes.

## [v0.1.0] - 2024-08-17
- Connected to a GitHub repository and prepared to start coding.
