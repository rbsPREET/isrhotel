// Imports - main
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")

// Imports - routes
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")

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
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/users", userRoute)

// Server
app.listen(process.env.PORT || 5001, () => {
    console.log("The server is running")
})