import express from "express";
import dotenv from "dotenv";
import connectToMongo from "./db.js";
import cors from "cors";
import bookRoute from "./routes/book_route.js";
import userRoute from "./routes/user_route.js";

// Initialize Express app
const app = express();

// Load environment variables from .env
dotenv.config();

// Define PORT from .env or fallback to 4001
const PORT = process.env.PORT || 4001;

// Middleware setup
app.use(cors()); // Enable CORS for all requests
app.use(express.json()); // Parse JSON request bodies


// MongoDB Connection and Server Start
const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectToMongo();
    console.log("Connected to MongoDB successfully");

    // Define routes
    app.use("/book", bookRoute);
    app.use("/user", userRoute);

    // Root route
    app.get("/", (req, res) => {
      res.send("Hello Ashu");
    });

    // Catch-all route for undefined routes
    app.use((req, res, next) => {
      res.status(404).json({ error: "Route not found" });
    });

    // Global error handling middleware
    app.use((err, req, res, next) => {
      console.error("Error:", err.message);
      res.status(500).json({ error: "Internal Server Error" });
    });

    // Start listening on the specified port
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit process with failure code 1
  }
};

// Start the server
startServer();
