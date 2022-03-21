const {
    verifyIsLoggedIn
} = require('../routes/verifyToken');

let interval;
let io;
exports.socketConnection = ({
    server,
    emit,
    seconds,
    req,
    res,
    next
}) => {
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
        interval = setInterval(() => emit(socket, req, res, next), seconds || 1000);

        socket.on("disconnect", () => {
            console.log("Client disconnected");
            clearInterval(interval);
        });
    })
}

exports.verifyToken = async (server, req, res, next) => {
    const verify = await verifyIsLoggedIn(req, res, next)
    console.log(verify);
    console.log(req.sessionID);
    server.emit("FromAPI", {
        user: req.user,
        token: req.token
    });


}