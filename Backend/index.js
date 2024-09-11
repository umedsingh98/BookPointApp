import express from "express";
import dotenv from "dotenv";
import connectToMongo from "./db.js";
import cors from "cors";
import bookRoute from "./routes/book_route.js";
import userRoute from "./routes/user_route.js";

const app = express();

// Load environment variables
dotenv.config();

// Define PORT from .env or use 4001 as default
const PORT = process.env.PORT || 4001;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB and then start the server
const startServer = async () => {
  try {
    await connectToMongo();
    console.log("Connected to MongoDB successfully");

    // Define routes
    app.use("/book", bookRoute);
    app.use("/user", userRoute);

    // Root route
    app.get("/", (req, res) => {
      res.send("Hello Ashu");
    });

    // Start listening on the specified port
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit process with failure
  }
};

// Call the startServer function to start everything
startServer();
