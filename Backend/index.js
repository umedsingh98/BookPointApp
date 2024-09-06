import express from 'express';
import dotenv from 'dotenv';
import connectToMongo from './db.js';
import cors from 'cors';
import path from 'path'; // Import path module
import bookRoute from './routes/book_route.js';
import userRoute from './routes/user_route.js';

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
