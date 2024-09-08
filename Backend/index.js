import http from 'http';
import express from "express";
import dotenv from "dotenv";
import connectToMongo from "./db.js";
import cors from "cors";
import bookRoute from "./routes/book_route.js";
import userRoute from "./routes/user_route.js";
const app = express();
http.Server();
dotenv.config();
const PORT = process.env.PORT || 4001 ;
connectToMongo();
app.use(cors());
app.use(express.json())

//defining routes
app.use("/book",bookRoute);
app.use("/user", userRoute);

app.get("/" ,(req,res) => {
    res.send("Hello Ashu");
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});