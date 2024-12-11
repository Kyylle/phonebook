import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

// Initialize environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // To parse JSON request bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)

// Routes
app.use('/api/users', userRoutes); // Use user routes

// Root route (for testing)
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Connect to MongoDB
const connectDB = async () => {
  try {
    // Latest Mongoose approach without useNewUrlParser and useUnifiedTopology
    await mongoose.connect(process.env.MONGO_URI || '');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1); // Exit the process if connection fails
  }
};

// Start the server
const startServer = () => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
  });
};

// Initialize MongoDB connection and server
connectDB().then(startServer);

export default app;
