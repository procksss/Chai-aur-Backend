// require("dotenv").config({ path: "./env" }); //always confing the dotenv path (this cannot be be used because this is a common js line and both common js and module js cannot be written in a same file so we have to import the dotenv instead of require )

import dotenv from "dotenv"; //configure the dotenv
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/db.js";
const app = express();

dotenv.config({
    path: "./env",
}); //also add this to the dev script or running script "-r dotenv/config --experimental-json-modules" here -r means run and --experimental-json-modules is used to run run it as experiment aas it is not available in dotenv module

connectDB() //on completion of async fuction it returns a promise
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is runnning on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGODB connection failed ");
    });

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("ERR:", error);
//             throw error;
//         });
//         app.listen(process.env.PORT, () => {
//             console.log(`app is listening on port ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.error("ERROR:", error);
//         throw error;
//     }
// })();
