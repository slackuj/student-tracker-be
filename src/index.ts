import express from "express";
import routes from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
import dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();
const app = express();
connectDB();

// parse json in req
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// routes are defined here
app.use("/api", routes);

// generic error handler
app.use(errorHandler);

export default app;