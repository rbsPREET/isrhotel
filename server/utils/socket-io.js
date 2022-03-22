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
        autoConnect:false,
        reconnection:false,
        cors: {
            origins: ['*']
        }
    }); //applied the socket to the server

    io.on("connection", (socket) => {
        console.log("new Client connected");
        if (interval) {
            clearInterval(interval);
        }
        interval = setInterval(() => emit(socket, req, res, next), seconds || 30000);

        socket.on("disconnect", () => {
            console.log("Client disconnected");
            clearInterval(interval);
        });
        socket.on("connect_error", (err)=>{
            console.log(err)
        })

        
    })
}

exports.verifyToken = async (server, req, res, next) => {
    try {
        const result = await Token.findOne({
            userId: req.session.user._id
        }).exec();
        jwt.verify(result.token, 'random', (err, user) => {
            if (err)
                return {
                    message: "Unvalid Token"
                }
            req.user = user
            req.token = result.token
        })
        server.emit("FromAPI", {
            user: req.user,
            token: req.token
        });

    } catch (err) {
        server.emit("FromAPI", {
            user: null,
            token: null,
            message: 'Not Saved in tokens table'
        })
    }
}