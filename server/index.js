const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")

// Allow .env file
dotenv.config()

// Mongo Connection
mongoose.connect(process.env.MONGO_URL
).then(() => {
    console.log("Connected to DB successfully")
}).catch((err) => {
    console.log(err)
})

// Cors
app.use(cors())

// Allow JSON reqs
app.use(express.json())

// Routes
/* app.use("/api/auth", authRoute) */

// Server
app.listen(process.env.PORT || 5001, () => {
    console.log("The server is running")
})