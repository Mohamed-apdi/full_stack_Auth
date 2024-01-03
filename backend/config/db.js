import mongoose from "mongoose";
import { dbURL } from "./config.js";
import chalk from "chalk";

const connectDB = async () => {

    try {
        // success
        await mongoose.connect(dbURL, { w: 'majority' })

        console.log(`connected to the database ${chalk.blue.bold(dbURL)} `)
    } catch (error) {
        console.log(`error connecting to the database ${error}`)
        process.exit(1);
    }
}

export default connectDB