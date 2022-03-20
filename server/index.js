// Imports - main
const express = require("express")
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const cors = require("cors")
const bodyParger = require('body-parser');
// Imports - routes
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const mallRoute = require("./routes/mall")
const reviewRoute = require("./routes/review")
const cityRoute = require("./routes/city")
const roomRoute = require("./routes/room")
const {
    socketConnection,
    verifyToken
} = require('./utils/socket-io');

// Allow .env file
dotenv.config()

// Mongo Connection
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to DB successfully")
}).catch((err) => {
    console.log(err)
})
// Server
const server = app.listen(process.env.PORT || 5001, () => {
    console.log(`The server is running on port ${process.env.PORT}`)
})

const io = require('socket.io')(server, {
    cors: {
        origins: ['*']
    }
}); //applied the socket to the server


const store = new MongoDBStore({
    uri: process.env.MONGO_URL,
    collection: 'sessions'
})
app.use(session({
    store: store,
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    maxAge: Date.now() + (30 * 86400 * 1000),
}))
app.set('trust proxy', 1)

app.use((req, res, next) => {
    req.io = io;
    require('events').EventEmitter.defaultMaxListeners = 0;
    socketConnection({
        server: server,
        req: req,
        res: res,
        emit: verifyToken,
        next: next
    })
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
app.use("/api/v1/reviews", reviewRoute)
app.use("/api/v1/cities", cityRoute)
app.use("/api/v1/rooms", roomRoute)
app.use("/api/v1/malls", mallRoute)