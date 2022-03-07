const mongoose = require("mongoose")

const RoomSchema = new mongoose.Schema({
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    img: {
        type: Array,
        required: true
    },
    guests: {
        type: Number,
        required: true
    },
    additions: {
        type: Array,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("Room", RoomSchema)