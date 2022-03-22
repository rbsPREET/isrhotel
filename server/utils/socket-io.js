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
try{
    console.log(verify ,'//38line socket-io.js');
    console.log(req.sessionID,'//39line socket-io.js');
    server.emit("FromAPI", {
        user: verify.user,
        token: verify.token
    });

}catch(err){
    console.log(err ,'//46line socket-io')
}

}