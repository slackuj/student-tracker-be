import express from "express";
import routes from "./routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

// never use magic numbers in your port
const PORT = 4000;

/*app.get("/", (req, res) => {
    res.send("Welcome to the server");
});*/

// parse json in req
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// routes are defined here
app.use("/api", routes);

// generic error handler
app.use(errorHandler);

export default app;