import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';  // Import connectDB from config/db.js
import userRoutes from './routes/userRoutes.js';
import contactRoutes from './routes/contactRoutes.js'
// Initialize environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // To parse JSON request bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)

// Routes
app.use('/api/users', userRoutes); // Use user routes
app.use('/api/contacts', contactRoutes); // Use contact routes
// Root route (for testing)
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Start the server
const startServer = () => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
  });
};

// Initialize MongoDB connection and server
connectDB().then(startServer);

export default app;
