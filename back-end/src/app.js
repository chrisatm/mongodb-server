const express = require('express');
const app = express();
const serverConfig = require('./config/server.config');
const dbConfig = require('./config/db.config');
const apiRoutes = require('./routes/api.routes');

// Initialize server configuration
serverConfig(app);

// Initialize MongoDB connection
dbConfig();

// Define API routes
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
