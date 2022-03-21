exports.getApiAndEmit = (socket) => {
    const response = new Date();
    console.log(response);
    socket.emit("FromAPI", response);
};

