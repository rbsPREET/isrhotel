// Imports - main
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const bodyParger = require('body-parser');

// Imports - routes
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const mallRoute = require("./routes/mall")

// Allow .env file
dotenv.config()

// Mongo Connection
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to DB successfully")
}).catch((err) => {
    console.log(err)
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});

app.use(bodyParger.urlencoded({
    extended: true
}))

// Allow JSON reqs
app.use(bodyParger.json())

// Cors
app.use(cors())

// Routes
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/users", userRoute)
app.use("/api/v1/malls", mallRoute)

// Server
app.listen(process.env.PORT || 5001, () => {
    console.log("The server is running")
})