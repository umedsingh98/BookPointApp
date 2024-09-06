import express from 'express';
import dotenv from 'dotenv';
import connectToMongo from './db.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url'; // For ES modules
import bookRoute from './routes/book_route.js';
import userRoute from './routes/user_route.js';

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

dotenv.config();
const PORT = process.env.PORT || 4001;

// Connect to MongoDB
connectToMongo();

// Middleware
app.use(cors());
app.use(express.json());

// Define API routes
app.use('/book', bookRoute);
app.use('/user', userRoute);

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle any other routes with React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Default route
app.get('/', (req, res) => {
  res.send('Hello Ashu');
});

// Start server
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
