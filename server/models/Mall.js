const mongoose = require("mongoose")

const MallSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
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
        type: Array,
        required: true
    },
    rooms: { // will include rooms & available rooms (obj in arr) with relation between hotel table and rooms table
        roomIds: {
            type: Array,
            ref: 'Room'
        },
        availableAmount: {
            type: Number
        }
    },
    price: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Mall", MallSchema)