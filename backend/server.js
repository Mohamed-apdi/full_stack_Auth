import  express  from "express";
import connectDB from "./config/db.js";
import chalk from "chalk";
import { registerUser } from "./controller/UserController.js";

const app = express();
app.use(express.json());

connectDB();
app.post("/api/v1/register-user", registerUser );


const port = 1000;
app.listen(port, () => {
    console.log(`${chalk.green.bold("server")} port is ${port}`)
})