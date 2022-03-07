const mongoose = require("mongoose")
const Room = require("./Room")

const OrderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    orderDetails: {
        rooms: {
            type: Array(mongoose.Schema.Types.ObjectId),
            required: true
        },
        guestsAmount: {
            room: {
                type: mongoose.Schema.Types.ObjectId,
                required: true
            },
            adults: {
                type: Number
            },
            childrens: {
                type: Number
            },
            amount: {
                type: Number,
                required: true
            },
        }

    },
    totalAmount: {
        type: Number,
        required: true
    },
    subscriptionAddress: {
        type: Object,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Order", OrderSchema)