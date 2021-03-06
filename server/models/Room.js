const mongoose = require("mongoose")

const RoomSchema = new mongoose.Schema({
    mallId: {
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
    images: {
        type: Array,
        required: true
    },
    guests: {
        type: Array,
        default: [{
            adults: {
                type: Number
            },
            childrens: {
                type: Number
            }
        }],
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