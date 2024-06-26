import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app =express()

app.use(cros({
    origin: process.env.CORS_ORIGIN,

}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:"true",limit:"16kb" }))
app.use(express.static("Public"))
app.use(cookieParser())

export {app}