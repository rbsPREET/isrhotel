const Token = require('../models/Token');

let interval;
let io;
exports.socketConnection = (server, emit, seconds) => {
    io = require('socket.io')(server, {
        cors: {
            origins: ['*']
        }
    }); //applied the socket to the server

    io.on("connection", (socket) => {
        console.log("new Client connected");
        if (interval) {
            clearInterval(interval);
        }
        interval = setInterval(() => emit(socket), seconds || 1000);

        socket.on("disconnect", () => {
            console.log("Client disconnected");
            clearInterval(interval);
        });
    })
}

exports.verifyIsLoggedIn = (socket) => {
    return async (req, res) => {
        console.log('sdadsa');
        const result = await Token.findOne({
            token: req.token
        }).exec();
        if (result !== null) {
            jwt.verify(result.token, 'random', (err, user) => {
                if (err)
                    return res.status(403).json("Unvalid Token")
                req.user = user
                req.token = result.token
            })
            socket.emit("FromAPI", {
                user: user,
                token: result.token
            });
        } else {
            socket.emit("FromAPI", {
                user: null,
                token: null
            });
            return res.json({
                success: false,
                message: "Not authenticated"
            })
        }

    }

}